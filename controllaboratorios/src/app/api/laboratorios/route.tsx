import axios from 'axios';
import { NextResponse } from 'next/server';

const API_URL_FINAL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await axios.post(`${API_URL_FINAL}/laboratorios`, data, {
      withCredentials: true,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating laboratorios:', error);
    return NextResponse.json({ error: 'Failed to create laboratorios' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const response = await axios.get(`${API_URL_FINAL}/laboratorios`, {
      withCredentials: true,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error getting laboratorios:', error);
    return NextResponse.json({ error: 'Failed to getting laboratorios' }, { status: 500 });
  }
}