# HR Turnover Management System
## ระบบจัดการข้อมูลพนักงาน เข้า-ออก และ Turnover

### 📁 โครงสร้างไฟล์
```
HR_System/
├── index.html          ← หน้าหลัก
├── css/
│   └── style.css       ← สไตล์ทั้งหมด (รองรับ Dark/Light mode)
├── js/
│   ├── app.firebase.js ← โค้ด JavaScript (Firebase + Firestore)
│   └── firebase-config.js ← ตั้งค่า Firebase (ไม่อัปขึ้น GitHub)
├── assets/
│   └── favicon.svg     ← ไอคอนเว็บ
└── README.md           ← ไฟล์นี้
```

### 🔑 เข้าสู่ระบบ
- ใช้ Firebase Authentication (Email/Password)
- ตั้งค่า Firebase ที่ไฟล์ `js/firebase-config.js` (ไฟล์นี้ถูก ignore ไม่อัปขึ้น GitHub)

### ✨ ฟีเจอร์
- **Dashboard** — สถิติ, กราฟ, Turnover Rate, Filter ปี/เดือน/สาขา/แผนก/ตำแหน่ง
- **ข้อมูลพนักงาน** — ค้นหา, แก้ไข, ลบ, Export CSV/Excel
- **เพิ่มพนักงาน** — คีย์พนักงานใหม่เข้าระบบ
- **บันทึกลาออก** — ออกทันที / แจ้งลาออกล่วงหน้า
- **Manpower** — PAR/Real/Hold/Need แก้ไขได้ แยกตามสาขา
- **ตั้งค่า** — เพิ่ม/แก้ไข/ลบ สาเหตุลาออก, สรุปสถิติ
- **Dark/Light Mode** — สลับธีมได้

### 🚀 วิธีใช้งาน
1. อัปโหลดโฟลเดอร์ทั้งหมดขึ้นโฮสต์ (Netlify, Vercel, GitHub Pages, etc.)
2. เปิด index.html ในเบราว์เซอร์
3. Login ด้วยบัญชีที่สร้างใน Firebase Authentication

### ⚠️ หมายเหตุ
- ข้อมูลถูกเก็บใน Firebase Firestore (อัปเดตแล้วจะคงอยู่)
