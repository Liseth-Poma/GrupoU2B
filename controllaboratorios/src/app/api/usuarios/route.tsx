import axios from 'axios';
import { NextResponse } from 'next/server';

const API_URL_FINAL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await axios.post(`${API_URL_FINAL}/usuarios`, data, {
      withCredentials: true,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const response = await axios.get(`${API_URL_FINAL}/usuarios`, {
      withCredentials: true,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error getting user:', error);
    return NextResponse.json({ error: 'Failed to getting user' }, { status: 500 });
  }
}