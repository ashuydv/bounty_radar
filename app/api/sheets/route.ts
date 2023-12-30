import { google, sheets_v4 } from 'googleapis';

interface BountyData {
    title: string; 
    startDate: string;
    endDate: string;
    description: string;
    link: string;
    pricing: string;// Added link property
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

        const sheetName = 'Sheet1';
        const bountyPlatform = 'platforms';

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: '1k2ZwqjnSAdybU55ERBFtDY42jblx1AlAIaInPyzfMA4',
            range: `${sheetName}!A2:F`, // Adjusted range to include the link column
        });

        const platforms = await sheets.spreadsheets.values.get({
            spreadsheetId: '1k2ZwqjnSAdybU55ERBFtDY42jblx1AlAIaInPyzfMA4',
            range: `${bountyPlatform}!A2:C`, // Adjusted range to include the link column
        });

        const existingValues = response.data.values || [];

        const jsonData: BountyData[] = existingValues.map((row) => {
            return {
                title: row[0] || '',
                startDate: row[1] || '',
                endDate: row[2] || '',
                description: row[3] || '',
                link: row[4] || '',
                pricing: row[5] || '' // Added link property
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

export async function POST(request: Request) {
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

        const sheetName = 'Sheet1';

        // Fetch existing values
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: '1k2ZwqjnSAdybU55ERBFtDY42jblx1AlAIaInPyzfMA4',
            range: `${sheetName}!A:F`, // Adjusted range to include the link column
        });

        const existingValues = response.data.values || [];

        // Extract column headers
        const headers = existingValues.length > 0 ? existingValues[0] : [];

        // Prepare new data with timestamps
        const body = await request.json();
        const timestamp = new Date().toISOString();
        const newData = [headers.map((header) => (header === 'Timestamp' ? timestamp : body[header]))];

        // Append new data to the sheet
        await (sheets.spreadsheets.values.append as Function)({
            spreadsheetId: '1k2ZwqjnSAdybU55ERBFtDY42jblx1AlAIaInPyzfMA4',
            range: `${sheetName}!A:E`, // Adjusted range to include the link column
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: newData,
            },
        } as sheets_v4.Params$Resource$Spreadsheets$Values$Append);

        return new Response(JSON.stringify({ message: 'Data appended to Google Sheets' }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error appending data to Google Sheets' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
