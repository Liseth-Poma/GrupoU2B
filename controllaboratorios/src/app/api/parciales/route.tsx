import axios from 'axios';
import { NextResponse } from 'next/server';

const API_URL_FINAL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await axios.post(`${API_URL_FINAL}/parciales`, data, {
      withCredentials: true,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating parciales:', error);
    return NextResponse.json({ error: 'Failed to create parciales' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const response = await axios.get(`${API_URL_FINAL}/parciales`, {
      withCredentials: true,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error getting asignaturas:', error);
    return NextResponse.json({ error: 'Failed to getting parciales' }, { status: 500 });
  }
}