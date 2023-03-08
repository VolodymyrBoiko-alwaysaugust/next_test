import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/_sites/:path'],
}

export default async function middleware(req) {
  const url = req.nextUrl

  const hostname = req.headers.get('host')

  if (hostname.includes('311gpt.')) {
    url.pathname = `/_sites/311gpt`
  }

  return NextResponse.rewrite(url)
}