function priceCalculate() {
  let ticknum = document.getElementById("ticknum").value.trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let pricePerTicket = 0;
  
  // กำหนดราคาตั๋วตามรหัส Event
  if (eventId === 1) {
    pricePerTicket = 91.25;
  } else if (eventId === 2) {
    pricePerTicket = 79.88;
  } else if (eventId === 3) {
    pricePerTicket = 83.12;
  } else if (eventId === 4) {
    pricePerTicket = 100.00;
  }
  
  // คำนวณราคารวม (ทำเป็นทศนิยม 2 ตำแหน่ง)
  let total = parseInt(ticknum, 10) * pricePerTicket;
  return total.toFixed(2);
}