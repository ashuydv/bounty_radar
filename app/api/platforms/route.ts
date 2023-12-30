import { google, sheets_v4 } from 'googleapis';

interface PlatformData {
    platformName: string,
    website: string,
}

export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({
            auth,
            version: 'v4',
        });

        const bountyPlatform = 'platforms';

        const platforms = await sheets.spreadsheets.values.get({
            spreadsheetId: '1k2ZwqjnSAdybU55ERBFtDY42jblx1AlAIaInPyzfMA4',
            range: `${bountyPlatform}!A2:C`, // Adjusted range to include the link column
        });

        const existingValues = platforms.data.values || [];

        const jsonData: PlatformData[] = existingValues.map((row) => {
            return {
                platformName: row[0] || '',
                website: row[1] || '',
                // Added link property
            };
        });

        return new Response(JSON.stringify({ data: jsonData }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Error fetching data from Google Sheets' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}