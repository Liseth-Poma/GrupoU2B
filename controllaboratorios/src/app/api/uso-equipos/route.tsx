import axios from 'axios';
import { NextResponse } from 'next/server';

const API_URL_FINAL = process.env.API_URL;

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Datos recibidos en API:', data);
        const response = await axios.post(`${API_URL_FINAL}/uso-equipos`, data, {
            withCredentials: true,
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Failed to create equipos' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const response = await axios.get(`https://xkkl9uzr67.execute-api.us-east-1.amazonaws.com/dev/practicas/detalladas`, {
            withCredentials: true,
        });
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error getting user:', error);
        return NextResponse.json({ error: 'Failed to getting equipos' }, { status: 500 });
    }
}