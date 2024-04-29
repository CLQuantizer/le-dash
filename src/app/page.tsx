'use client';

import Image from "next/image";
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
    </main>
  );
}
