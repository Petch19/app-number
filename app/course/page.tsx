// Next.js Portfolio + Course Pages (App Router)
// This file is suitable for app/page.js — a single-page course overview containing the 7 lesson units for BSCCT604
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6 lg:p-12">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <h1 className="text-2xl font-extrabold">BSCCT604 — การบริหารเครือข่ายคอมพิวเตอร์</h1>
        <nav className="flex gap-4">
          <a href="#overview" className="hover:underline">ภาพรวม</a>
          <a href="#unit1" className="hover:underline">บทที่ 1</a>
          <a href="#unit2" className="hover:underline">บทที่ 2</a>
          <a href="#unit3" className="hover:underline">บทที่ 3</a>
          <a href="#unit4" className="hover:underline">บทที่ 4</a>
          <a href="#unit5" className="hover:underline">บทที่ 5</a>
          <a href="#unit6" className="hover:underline">บทที่ 6</a>
          <a href="#unit7" className="hover:underline">บทที่ 7</a>
        </nav>
      </header>

      {/* Overview */}
      <section id="overview" className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow mb-8">
        <h2 className="text-2xl font-bold mb-2">ภาพรวมรายวิชา / Course Overview</h2>
        <p className="leading-relaxed mb-4">รหัส: <strong>BSCCT604</strong> — ชื่อภาษาไทย: <em>การบริหารเครือข่ายคอมพิวเตอร์</em><br/>
        หน่วยกิต: 3(2-2-5) — วิชาบังคับก่อน: <strong>BSCCT603</strong> (การสื่อสารข้อมูลและระบบเครือข่ายคอมพิวเตอร์)</p>

        <p className="text-sm text-gray-600">EN: Study and practice in installation and setup of computer network with various applications, routing, assignment of static and dynamic IP addresses, wireless network system, computer network security, virtual private network design, and application of computer network in various types of organization.</p>
      </section>

      {/* Units grid */}
      <section id="units" className="max-w-6xl mx-auto grid gap-6">
        {/* Unit 1 */}
        <article id="unit1" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 1 — การติดตั้งและการตั้งค่าเครือข่ายคอมพิวเตอร์</h3>
          <p className="mb-3">เนื้อหา: การติดตั้งอุปกรณ์เครือข่าย (Switch, Router, Access Point), การต่อสาย, การตั้งค่า IP Address, Subnet Mask, Default Gateway และการตรวจสอบการเชื่อมต่อ (ping, traceroute)</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Hands-on: ตั้งค่า IP บนอุปกรณ์ Windows/Linux</li>
            <li>Lab: การเชื่อมต่อ Switch และ Router เบื้องต้น</li>
            <li>Exercise: สร้าง topology ง่าย ๆ และทดสอบการติดต่อ</li>
          </ul>
        </article>

        {/* Unit 2 */}
        <article id="unit2" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 2 — การกำหนดเส้นทาง (Routing)</h3>
          <p className="mb-3">เนื้อหา: แนวคิด routing, Routing Table, การตั้งค่า static route, dynamic routing protocols เช่น RIP, OSPF, และการวิเคราะห์เส้นทาง</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Lab: ตั้งค่า static routing ระหว่าง subnet</li>
            <li>Lab: ติดตั้ง OSPF บน router เสมือน (e.g., Cisco Packet Tracer หรือ GNS3)</li>
            <li>Practice: แก้ปัญหา loop และ route redistribution เบื้องต้น</li>
          </ul>
        </article>

        {/* Unit 3 */}
        <article id="unit3" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 3 — การจัดสรร IP Address</h3>
          <p className="mb-3">เนื้อหา: การออกแบบ IP scheme, การแบ่ง subnet, การจ่าย IP แบบคงที่ (Static) และแบบพลวัต (DHCP)</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Exercise: ออกแบบ IPv4 subnet สำหรับองค์กรสมมติ</li>
            <li>Lab: ติดตั้งและตั้งค่า DHCP Server และสำรองที่อยู่ (reservations)</li>
            <li>Bonus: พื้นฐาน IPv6 และการวางแผน address space</li>
          </ul>
        </article>

        {/* Unit 4 */}
        <article id="unit4" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 4 — ระบบเครือข่ายไร้สาย (Wireless Network)</h3>
          <p className="mb-3">เนื้อหา: การติดตั้ง Access Point, ตัดสินใจตำแหน่ง (site survey), ช่องสัญญาณ (channels), SSID, WPA/WPA2/WPA3, และการบริหารจัดการเครือข่ายไร้สาย</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Lab: ตั้งค่า AP และทดสอบการเชื่อมต่อจากอุปกรณ์หลายชนิด</li>
            <li>Exercise: วิเคราะห์ปัญหาการรบกวนสัญญาณและการเลือกช่อง</li>
            <li>Security: การใช้ 802.1X และ RADIUS เบื้องต้น</li>
          </ul>
        </article>

        {/* Unit 5 */}
        <article id="unit5" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 5 — ความปลอดภัยในเครือข่าย</h3>
          <p className="mb-3">เนื้อหา: Firewall, IDS/IPS, การเข้ารหัส, การจัดการแพตช์, การป้องกันภัยคุกคาม และแนวทางปฏิบัติที่ปลอดภัยในองค์กร</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Lab: ตั้งค่า basic firewall rules และ NAT</li>
            <li>Practice: การวิเคราะห์ traffic ด้วย Wireshark</li>
            <li>Case Study: รับมือกับ ransomware และ phishing</li>
          </ul>
        </article>

        {/* Unit 6 */}
        <article id="unit6" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 6 — การออกแบบ VPN</h3>
          <p className="mb-3">เนื้อหา: แนวคิด VPN, IPSec, SSL VPN, site-to-site และ remote-access VPN, การตั้งค่าและการทดสอบการเชื่อมต่อที่ปลอดภัย</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Lab: สร้าง site-to-site VPN ระหว่าง Router สองตัว</li>
            <li>Lab: ตั้งค่า OpenVPN หรือ WireGuard สำหรับ remote access</li>
            <li>Security: การจัดการคีย์และ certificate</li>
          </ul>
        </article>

        {/* Unit 7 */}
        <article id="unit7" className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">บทที่ 7 — การประยุกต์ใช้เครือข่ายคอมพิวเตอร์ในองค์กรต่าง ๆ</h3>
          <p className="mb-3">เนื้อหา: การออกแบบเครือข่ายตามขนาดองค์กร (SME, Enterprise), การแบ่ง VLAN, QoS, นโยบายการสำรองข้อมูล และการบริหารจัดการเครือข่าย</p>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Case: ออกแบบเครือข่ายสำหรับออฟฟิศขนาดเล็กถึงขนาดกลาง</li>
            <li>Exercise: แผนกและ VLAN, การแยกทราฟฟิกของระบบสำคัญ</li>
            <li>Tooling: ระบบมอนิเตอร์ (e.g., Zabbix, Prometheus) เบื้องต้น</li>
          </ul>
        </article>
      </section>

      {/* Footer + quick links */}
      <footer className="max-w-6xl mx-auto mt-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-start md:items-center">
          <div>หากต้องการ: ตัวอย่าง Lab scripts, ไฟล์ config, หรือ topology diagram บอกได้เลย ผมจะเพิ่มให้เป็นไฟล์ดาวน์โหลด</div>
          <div className="flex gap-4">
            <a href="#unit1" className="underline">Jump to Unit 1</a>
            <a href="#unit4" className="underline">Wireless Lab</a>
            <a href="#unit6" className="underline">VPN Lab</a>
          </div>
        </div>
        <p className="mt-6">© 2025 คณะ / ผู้สอน</p>
      </footer>
    </main>
  );
}
