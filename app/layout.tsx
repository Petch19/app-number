// app/layout.js
import './globals.css'; // ไฟล์สไตล์ทั่วไป
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="th"> {/* กำหนดภาษาเป็นภาษาไทย */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Stylish Website</title>
      </head>
      <body>
        <div className="container">
          {/* เมนูด้านซ้าย */}
          <nav className="sidebar">
            <ul>
              <li><Link href="/">หน้าหลัก</Link></li>
              <li><Link href="/course">เกี่ยวกับ</Link></li>
              <li><Link href="/calculate">คิดเลข2หน่วย</Link></li>
              <li><Link href="/grade">ตัดเกรด</Link></li>
            </ul>
          </nav>

          {/* เนื้อหาหลัก */}
          <main className="main-content">
            {children} {/* นี่จะเป็นเนื้อหาของแต่ละหน้า */}
          </main>
        </div>
      </body>
    </html>
  );
}
