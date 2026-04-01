// ตรวจสอบ National ID: ต้องมี 13 หลัก และเป็นตัวเลขทั้งหมด
function checkNID() {
	let nid = document.getElementById("nid").value.trim();
	let isOnlyDigits = /^\d+$/.test(nid);
	
	if (nid.length !== 13 || !isOnlyDigits) {
	  return false;
	} else {
	  return true;
	}
  }
  
  // ตรวจสอบจำนวนตั๋ว: ต้องเป็นตัวเลข และอยู่ระหว่าง 1 ถึง 5
  function checkTicketNo() {
	let numStr = document.getElementById("ticknum").value.trim();
	let isOnlyDigits = /^\d+$/.test(numStr); // กันการพิมพ์จุดทศนิยมหรือตัวอักษร
	let num = parseInt(numStr, 10);
	
	if (!isOnlyDigits || isNaN(num) || num < 1 || num > 5) {
	  return false;
	} else {
	  return true;
	}
  }
  
  // ตรวจสอบว่าฟิลด์ว่างหรือไม่ (ใช้กับ First Name และ Last Name)
  function checkEmpty(fieldId) {
	let val = document.getElementById(fieldId).value.trim();
	return val === "";
  }
  
  // ฟังก์ชันหลักที่ผูกกับปุ่ม Book (onsubmit)
  function validateForm() {
	// 1. ตรวจสอบ NID
	if (!checkNID()) {
	  alert("Invalid value for National ID! Must be exactly 13 digits.");
	  document.getElementById("nid").focus();
	  return false;
	}
	
	// 2. ตรวจสอบ First Name
	if (checkEmpty("fname")) {
	  alert("Please enter your First Name.");
	  document.getElementById("fname").focus();
	  return false;
	}
	
	// 3. ตรวจสอบ Last Name
	if (checkEmpty("lname")) {
	  alert("Please enter your Last Name.");
	  document.getElementById("lname").focus();
	  return false;
	}
	
	// 4. ตรวจสอบจำนวนตั๋ว
	if (!checkTicketNo()) {
	  alert("Invalid value for No.of tickets! You can only book 1 to 5 tickets.");
	  document.getElementById("ticknum").focus();
	  return false;
	}
  
	// หากข้อมูลถูกต้องทั้งหมด ให้คำนวณราคาและแสดง Popup
	let total = priceCalculate();
	alert("Total price for this booking is " + total + " USD");
	
	return false; // return false เพื่อไม่ให้หน้าเว็บรีเฟรช (ตามพฤติกรรมปกติของแบบฝึกหัด)
  }