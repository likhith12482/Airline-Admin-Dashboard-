

// BHARAT AIRLINES - ADMIN DASHBOARD
// Indian Airline Management System with Multi-Select Delete

// MOCK DATABASE with Indian Airline Names
let carriers = [
    { carrierId: 101, carrierName: "Air India", discount30: 5, discount60: 10, discount90: 15, bulkDiscount: 12, refund2Days: 20, refund10Days: 50, refund20Plus: 80, silverDisc: 5, goldDisc: 10, platinumDisc: 15 },
    { carrierId: 102, carrierName: "IndiGo", discount30: 3, discount60: 7, discount90: 12, bulkDiscount: 8, refund2Days: 15, refund10Days: 45, refund20Plus: 70, silverDisc: 4, goldDisc: 9, platinumDisc: 14 },
    { carrierId: 103, carrierName: "SpiceJet", discount30: 8, discount60: 12, discount90: 18, bulkDiscount: 10, refund2Days: 25, refund10Days: 55, refund20Plus: 85, silverDisc: 6, goldDisc: 11, platinumDisc: 16 },
    { carrierId: 104, carrierName: "Vistara", discount30: 7, discount60: 11, discount90: 16, bulkDiscount: 9, refund2Days: 22, refund10Days: 52, refund20Plus: 82, silverDisc: 5, goldDisc: 10, platinumDisc: 15 },
    { carrierId: 105, carrierName: "Akasa Air", discount30: 4, discount60: 8, discount90: 14, bulkDiscount: 7, refund2Days: 18, refund10Days: 48, refund20Plus: 75, silverDisc: 4, goldDisc: 9, platinumDisc: 13 }
];

let flights = [
    { flightId: 1001, carrierId: 101, origin: "Mumbai (BOM)", destination: "Delhi (DEL)", airFare: 5500, economyCap: 180, businessCap: 40, executiveCap: 25 },
    { flightId: 1002, carrierId: 102, origin: "Bengaluru (BLR)", destination: "Hyderabad (HYD)", airFare: 3200, economyCap: 150, businessCap: 35, executiveCap: 20 },
    { flightId: 1003, carrierId: 103, origin: "Chennai (MAA)", destination: "Kolkata (CCU)", airFare: 4800, economyCap: 160, businessCap: 38, executiveCap: 22 },
    { flightId: 1004, carrierId: 104, origin: "Pune (PNQ)", destination: "Ahmedabad (AMD)", airFare: 4100, economyCap: 140, businessCap: 32, executiveCap: 18 },
    { flightId: 1005, carrierId: 105, origin: "Delhi (DEL)", destination: "Jaipur (JAI)", airFare: 2800, economyCap: 120, businessCap: 28, executiveCap: 15 },
    { flightId: 1006, carrierId: 101, origin: "Mumbai (BOM)", destination: "Chennai (MAA)", airFare: 5200, economyCap: 170, businessCap: 38, executiveCap: 22 }
];

let flightSchedules = [
    { scheduleId: 1, flightId: 1001, dateOfTravel: "2025-05-20", economyBooked: 65, businessBooked: 18, executiveBooked: 8 },
    { scheduleId: 2, flightId: 1002, dateOfTravel: "2025-05-25", economyBooked: 42, businessBooked: 12, executiveBooked: 5 },
    { scheduleId: 3, flightId: 1003, dateOfTravel: "2025-06-05", economyBooked: 88, businessBooked: 24, executiveBooked: 10 },
    { scheduleId: 4, flightId: 1004, dateOfTravel: "2025-06-10", economyBooked: 55, businessBooked: 15, executiveBooked: 6 },
    { scheduleId: 5, flightId: 1005, dateOfTravel: "2025-06-15", economyBooked: 35, businessBooked: 10, executiveBooked: 4 },
    { scheduleId: 6, flightId: 1006, dateOfTravel: "2025-06-20", economyBooked: 28, businessBooked: 8, executiveBooked: 3 }
];

let users = [
    { userId: 1, userName: "Aarav Sharma", email: "aarav@email.com", phone: 9876543210, city: "Mumbai", role: "Customer", customerCategory: "Gold" },
    { userId: 2, userName: "Vihaan Patel", email: "vihaan@email.com", phone: 9876543222, city: "Delhi", role: "Customer", customerCategory: "Silver" },
    { userId: 3, userName: "Ananya Reddy", email: "ananya@email.com", phone: 9988776655, city: "Bengaluru", role: "Customer", customerCategory: "Platinum" },
    { userId: 4, userName: "Kavya Nair", email: "kavya@email.com", phone: 9876543333, city: "Chennai", role: "Customer", customerCategory: "Gold" },
    { userId: 5, userName: "Rohan Gupta", email: "rohan@email.com", phone: 9876544444, city: "Pune", role: "Customer", customerCategory: "Silver" },
    { userId: 6, userName: "Priya Singh", email: "priya@email.com", phone: 9876545555, city: "Jaipur", role: "Customer", customerCategory: "Platinum" },
    { userId: 99, userName: "Admin Singh", role: "Admin", email: "admin@bharat.com" }
];

let bookings = [
    { bookingId: 5001, flightId: 1001, userId: 1, noOfSeats: 2, seatCategory: "Economy", dateOfTravel: "2025-05-20", bookingStatus: "Confirmed", bookingAmount: 11000, bookingDate: "2025-04-10" },
    { bookingId: 5002, flightId: 1002, userId: 2, noOfSeats: 1, seatCategory: "Business", dateOfTravel: "2025-05-25", bookingStatus: "Confirmed", bookingAmount: 3200, bookingDate: "2025-04-15" },
    { bookingId: 5003, flightId: 1003, userId: 3, noOfSeats: 3, seatCategory: "Executive", dateOfTravel: "2025-06-05", bookingStatus: "Confirmed", bookingAmount: 14400, bookingDate: "2025-04-20" },
    { bookingId: 5004, flightId: 1004, userId: 4, noOfSeats: 2, seatCategory: "Economy", dateOfTravel: "2025-06-10", bookingStatus: "Confirmed", bookingAmount: 8200, bookingDate: "2025-05-01" },
    { bookingId: 5005, flightId: 1005, userId: 5, noOfSeats: 1, seatCategory: "Business", dateOfTravel: "2025-06-15", bookingStatus: "Cancelled", bookingAmount: 2800, bookingDate: "2025-05-05" },
    { bookingId: 5006, flightId: 1006, userId: 6, noOfSeats: 2, seatCategory: "Economy", dateOfTravel: "2025-06-20", bookingStatus: "Confirmed", bookingAmount: 10400, bookingDate: "2025-05-10" }
];

function getCarrierName(cid) { 
    let c = carriers.find(c => c.carrierId === cid); 
    return c ? c.carrierName : "Unknown"; 
}

function getUserName(uid) { 
    let u = users.find(u => u.userId === uid); 
    return u ? u.userName : "Guest"; 
}

// ==================== AIRLINE MANAGEMENT ====================
function renderCarriers() {
    const tbody = document.getElementById('carrierTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    carriers.forEach(c => {
        let row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<input type="checkbox" class="carrier-checkbox" data-id="${c.carrierId}">`;
        row.insertCell(1).innerText = c.carrierId;
        row.insertCell(2).innerText = c.carrierName;
        row.insertCell(3).innerText = c.discount30 + "%";
        row.insertCell(4).innerText = c.discount60 + "%";
        row.insertCell(5).innerText = c.discount90 + "%";
        row.insertCell(6).innerText = c.bulkDiscount + "%";
        row.insertCell(7).innerText = c.refund2Days + "%";
        row.insertCell(8).innerText = c.refund10Days + "%";
        row.insertCell(9).innerText = c.refund20Plus + "%";
        row.insertCell(10).innerText = c.silverDisc + "%";
        row.insertCell(11).innerText = c.goldDisc + "%";
        row.insertCell(12).innerText = c.platinumDisc + "%";
        let actionCell = row.insertCell(13);
        actionCell.innerHTML = `<button class="btn-sm btn-edit" data-id="${c.carrierId}">✏️ Edit</button> 
                                 <button class="btn-sm btn-delete" data-id="${c.carrierId}">🗑️ Del</button>`;
    });
    
    document.querySelectorAll('.btn-edit').forEach(btn => btn.addEventListener('click', (e) => {
        let id = parseInt(btn.getAttribute('data-id'));
        editCarrierById(id);
    }));
    
    document.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', (e) => {
        let id = parseInt(btn.getAttribute('data-id'));
        if (confirm("Delete this airline?")) {
            deleteCarrierById(id);
        }
    }));
    
    const selectAllCheckbox = document.getElementById('selectAllCarriers');
    if (selectAllCheckbox) {
        selectAllCheckbox.onclick = (e) => {
            const checkboxes = document.querySelectorAll('.carrier-checkbox');
            checkboxes.forEach(cb => cb.checked = e.target.checked);
        };
    }
    
    document.getElementById('statCarriers').innerText = carriers.length;
}

function deleteCarrierById(id) {
    carriers = carriers.filter(c => c.carrierId !== id);
    flights = flights.filter(f => f.carrierId !== id);
    flightSchedules = flightSchedules.filter(s => {
        let flight = flights.find(f => f.flightId === s.flightId);
        return flight !== undefined;
    });
    renderCarriers();
    renderFlights();
    renderBookings(document.getElementById('searchBookingInput').value);
    showCarrierMessage("Airline deleted successfully.", "#dcfce7");
    document.getElementById('carrierFormContainer').style.display = 'none';
}

function deleteSelectedCarriers() {
    const selectedCheckboxes = document.querySelectorAll('.carrier-checkbox:checked');
    if (selectedCheckboxes.length === 0) {
        alert("Please select at least one airline to delete.");
        return;
    }
    
    if (confirm(`Delete ${selectedCheckboxes.length} airline(s)? This will also remove associated flights.`)) {
        const idsToDelete = Array.from(selectedCheckboxes).map(cb => parseInt(cb.getAttribute('data-id')));
        carriers = carriers.filter(c => !idsToDelete.includes(c.carrierId));
        flights = flights.filter(f => !idsToDelete.includes(f.carrierId));
        flightSchedules = flightSchedules.filter(s => {
            let flight = flights.find(f => f.flightId === s.flightId);
            return flight !== undefined;
        });
        bookings = bookings.filter(b => {
            let flight = flights.find(f => f.flightId === b.flightId);
            return flight !== undefined;
        });
        
        renderCarriers();
        renderFlights();
        renderBookings(document.getElementById('searchBookingInput').value);
        updateStats();
        showCarrierMessage(`${idsToDelete.length} airline(s) deleted successfully.`, "#dcfce7");
        
        const selectAll = document.getElementById('selectAllCarriers');
        if (selectAll) selectAll.checked = false;
    }
}

let currentEditId = null;

function editCarrierById(id) {
    let carrier = carriers.find(c => c.carrierId === id);
    if (!carrier) return;
    currentEditId = id;
    showCarrierForm(true, carrier);
}

function showCarrierForm(isEdit, data = null) {
    const container = document.getElementById('carrierFormContainer');
    const fieldsDiv = document.getElementById('carrierFormFields');
    document.getElementById('formTitle').innerHTML = isEdit ? `✏️ Edit Airline (ID: ${data.carrierId})` : `➕ Add New Airline`;
    fieldsDiv.innerHTML = `
        <div class="input-field"><label>Airline Name *</label><input id="carrierName" value="${data ? data.carrierName : ''}" placeholder="Airline Name"></div>
        <div class="input-field"><label>30 Days Disc %</label><input id="disc30" type="number" value="${data ? data.discount30 : 0}"></div>
        <div class="input-field"><label>60 Days Disc %</label><input id="disc60" type="number" value="${data ? data.discount60 : 0}"></div>
        <div class="input-field"><label>90 Days Disc %</label><input id="disc90" type="number" value="${data ? data.discount90 : 0}"></div>
        <div class="input-field"><label>Bulk Booking Disc %</label><input id="bulkDisc" type="number" value="${data ? data.bulkDiscount : 0}"></div>
        <div class="input-field"><label>Refund 2 Days Before%</label><input id="ref2" type="number" value="${data ? data.refund2Days : 0}"></div>
        <div class="input-field"><label>Refund 10 Days Before%</label><input id="ref10" type="number" value="${data ? data.refund10Days : 0}"></div>
        <div class="input-field"><label>Refund 20+ Days Before%</label><input id="ref20" type="number" value="${data ? data.refund20Plus : 0}"></div>
        <div class="input-field"><label>Silver User Discount%</label><input id="silverDisc" type="number" value="${data ? data.silverDisc : 0}"></div>
        <div class="input-field"><label>Gold User Discount%</label><input id="goldDisc" type="number" value="${data ? data.goldDisc : 0}"></div>
        <div class="input-field"><label>Platinum User Discount%</label><input id="platinumDisc" type="number" value="${data ? data.platinumDisc : 0}"></div>
    `;
    container.style.display = 'block';
}

function saveCarrierLogic() {
    let name = document.getElementById('carrierName').value.trim();
    if (!name) { showCarrierMessage("Airline name is required.", "#ffecb3"); return; }
    let newCarrier = {
        carrierId: currentEditId ? currentEditId : (Math.max(...carriers.map(c => c.carrierId), 100) + 1),
        carrierName: name,
        discount30: parseInt(document.getElementById('disc30').value) || 0,
        discount60: parseInt(document.getElementById('disc60').value) || 0,
        discount90: parseInt(document.getElementById('disc90').value) || 0,
        bulkDiscount: parseInt(document.getElementById('bulkDisc').value) || 0,
        refund2Days: parseInt(document.getElementById('ref2').value) || 0,
        refund10Days: parseInt(document.getElementById('ref10').value) || 0,
        refund20Plus: parseInt(document.getElementById('ref20').value) || 0,
        silverDisc: parseInt(document.getElementById('silverDisc').value) || 0,
        goldDisc: parseInt(document.getElementById('goldDisc').value) || 0,
        platinumDisc: parseInt(document.getElementById('platinumDisc').value) || 0
    };
    if (currentEditId) {
        let idx = carriers.findIndex(c => c.carrierId === currentEditId);
        if (idx !== -1) carriers[idx] = newCarrier;
        showCarrierMessage("Airline updated successfully.", "#d9f0ec");
    } else {
        carriers.push(newCarrier);
        showCarrierMessage("New airline added successfully.", "#d9f0ec");
    }
    currentEditId = null;
    renderCarriers();
    document.getElementById('carrierFormContainer').style.display = 'none';
}

function showCarrierMessage(msg, bgColor) {
    let msgDiv = document.getElementById('carrierFormMsg');
    msgDiv.innerText = msg;
    msgDiv.style.backgroundColor = bgColor;
    msgDiv.style.display = 'block';
    setTimeout(() => { msgDiv.style.display = 'none'; }, 2500);
}

// ==================== FLIGHT MANAGEMENT ====================
function renderFlights() {
    const tbody = document.getElementById('flightsTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    flights.forEach(flight => {
        const schedule = flightSchedules.find(s => s.flightId === flight.flightId);
        const travelDate = schedule ? schedule.dateOfTravel : "TBD";
        const ecoBooked = schedule ? schedule.economyBooked : 0;
        const busBooked = schedule ? schedule.businessBooked : 0;
        const execBooked = schedule ? schedule.executiveBooked : 0;
        
        const ecoLeft = flight.economyCap - ecoBooked;
        const busLeft = flight.businessCap - busBooked;
        const execLeft = flight.executiveCap - execBooked;
        
        const isActive = ecoLeft > 0 || busLeft > 0 || execLeft > 0;
        const statusBadge = isActive ? '<span class="badge-status">Active</span>' : '<span class="badge-cancelled">Fully Booked</span>';
        
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<input type="checkbox" class="flight-checkbox" data-id="${flight.flightId}">`;
        row.insertCell(1).innerText = flight.flightId;
        row.insertCell(2).innerText = getCarrierName(flight.carrierId);
        row.insertCell(3).innerText = flight.origin;
        row.insertCell(4).innerText = flight.destination;
        row.insertCell(5).innerText = `₹${flight.airFare.toLocaleString()}`;
        row.insertCell(6).innerHTML = `${ecoLeft} / ${flight.economyCap}`;
        row.insertCell(7).innerHTML = `${busLeft} / ${flight.businessCap}`;
        row.insertCell(8).innerHTML = `${execLeft} / ${flight.executiveCap}`;
        row.insertCell(9).innerText = travelDate;
        row.insertCell(10).innerHTML = statusBadge;
        row.insertCell(11).innerHTML = `<button class="btn-sm btn-edit edit-flight-btn" data-id="${flight.flightId}">✏️ Edit</button>`;
    });
    
    document.querySelectorAll('.edit-flight-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let id = parseInt(btn.getAttribute('data-id'));
            editFlightById(id);
        });
    });
    
    const selectAllCheckbox = document.getElementById('selectAllFlights');
    if (selectAllCheckbox) {
        selectAllCheckbox.onclick = (e) => {
            const checkboxes = document.querySelectorAll('.flight-checkbox');
            checkboxes.forEach(cb => cb.checked = e.target.checked);
        };
    }
    
    document.getElementById('statFlights').innerText = flights.length;
}

function deleteSelectedFlights() {
    const selectedCheckboxes = document.querySelectorAll('.flight-checkbox:checked');
    if (selectedCheckboxes.length === 0) {
        alert("Please select at least one flight to delete.");
        return;
    }
    
    if (confirm(`Delete ${selectedCheckboxes.length} flight(s)?`)) {
        const idsToDelete = Array.from(selectedCheckboxes).map(cb => parseInt(cb.getAttribute('data-id')));
        flights = flights.filter(f => !idsToDelete.includes(f.flightId));
        flightSchedules = flightSchedules.filter(s => !idsToDelete.includes(s.flightId));
        bookings = bookings.filter(b => !idsToDelete.includes(b.flightId));
        
        renderFlights();
        renderBookings(document.getElementById('searchBookingInput').value);
        updateStats();
        showFlightMessage(`${idsToDelete.length} flight(s) deleted successfully.`, "#dcfce7");
        
        const selectAll = document.getElementById('selectAllFlights');
        if (selectAll) selectAll.checked = false;
    }
}

function viewAllFlights() {
    renderFlights();
    showFlightMessage("All flights displayed.", "#eef2ff");
}

let editingFlightId = null;

function showFlightForm(isEdit, flightData = null) {
    const container = document.getElementById('flightFormContainer');
    const fieldsDiv = document.getElementById('flightFormFields');
    const title = document.getElementById('flightFormTitle');
    
    title.innerHTML = isEdit ? `✏️ Edit Flight #${flightData.flightId}` : `➕ Add New Flight`;
    
    const carrierOptions = carriers.map(c => `<option value="${c.carrierId}" ${flightData && flightData.carrierId === c.carrierId ? 'selected' : ''}>${c.carrierName}</option>`).join('');
    
    fieldsDiv.innerHTML = `
        <div class="input-field"><label>Airline *</label><select id="flightCarrierId">${carrierOptions}</select></div>
        <div class="input-field"><label>Origin *</label><input id="flightOrigin" value="${flightData ? flightData.origin : ''}" placeholder="City (e.g., Mumbai)"></div>
        <div class="input-field"><label>Destination *</label><input id="flightDest" value="${flightData ? flightData.destination : ''}" placeholder="City"></div>
        <div class="input-field"><label>Fare (₹) *</label><input id="flightFare" type="number" value="${flightData ? flightData.airFare : 4000}"></div>
        <div class="input-field"><label>Economy Capacity</label><input id="flightEcoCap" type="number" value="${flightData ? flightData.economyCap : 120}"></div>
        <div class="input-field"><label>Business Capacity</label><input id="flightBusCap" type="number" value="${flightData ? flightData.businessCap : 30}"></div>
        <div class="input-field"><label>Executive Capacity</label><input id="flightExecCap" type="number" value="${flightData ? flightData.executiveCap : 20}"></div>
        <div class="input-field"><label>Travel Date (YYYY-MM-DD)</label><input id="flightDate" type="date" value="${flightData ? (flightSchedules.find(s => s.flightId === flightData.flightId)?.dateOfTravel || '2025-07-01') : '2025-07-15'}"></div>
    `;
    container.style.display = 'block';
}

function saveFlightLogic() {
    const carrierId = parseInt(document.getElementById('flightCarrierId').value);
    const origin = document.getElementById('flightOrigin').value.trim();
    const destination = document.getElementById('flightDest').value.trim();
    const airFare = parseInt(document.getElementById('flightFare').value);
    const ecoCap = parseInt(document.getElementById('flightEcoCap').value);
    const busCap = parseInt(document.getElementById('flightBusCap').value);
    const execCap = parseInt(document.getElementById('flightExecCap').value);
    const travelDate = document.getElementById('flightDate').value;
    
    if (!origin || !destination || !airFare) {
        showFlightMessage("Please fill all required fields.", "#ffecb3");
        return;
    }
    
    if (editingFlightId) {
        const index = flights.findIndex(f => f.flightId === editingFlightId);
        if (index !== -1) {
            flights[index] = { ...flights[index], carrierId, origin, destination, airFare, economyCap: ecoCap, businessCap: busCap, executiveCap: execCap };
            const scheduleIdx = flightSchedules.findIndex(s => s.flightId === editingFlightId);
            if (scheduleIdx !== -1) {
                flightSchedules[scheduleIdx].dateOfTravel = travelDate;
            } else {
                flightSchedules.push({ scheduleId: Date.now(), flightId: editingFlightId, dateOfTravel: travelDate, economyBooked: 0, businessBooked: 0, executiveBooked: 0 });
            }
            showFlightMessage("Flight updated successfully!", "#d9f0ec");
        }
    } else {
        const newId = Math.max(...flights.map(f => f.flightId), 1000) + 1;
        flights.push({ flightId: newId, carrierId, origin, destination, airFare, economyCap: ecoCap, businessCap: busCap, executiveCap: execCap });
        flightSchedules.push({ scheduleId: Date.now(), flightId: newId, dateOfTravel: travelDate, economyBooked: 0, businessBooked: 0, executiveBooked: 0 });
        showFlightMessage("New flight added successfully!", "#d9f0ec");
    }
    
    editingFlightId = null;
    renderFlights();
    document.getElementById('flightFormContainer').style.display = 'none';
    updateStats();
}

function editFlightById(id) {
    const flight = flights.find(f => f.flightId === id);
    if (!flight) return;
    editingFlightId = id;
    showFlightForm(true, flight);
}

function showFlightMessage(msg, bgColor) {
    const msgDiv = document.getElementById('flightFormMsg');
    msgDiv.innerText = msg;
    msgDiv.style.backgroundColor = bgColor;
    msgDiv.style.display = 'block';
    setTimeout(() => { msgDiv.style.display = 'none'; }, 2500);
}

// ==================== BOOKING MANAGEMENT ====================
function renderBookings(filter = "") {
    const tbody = document.getElementById('bookingTableBody');
    tbody.innerHTML = '';
    let filtered = bookings.filter(b => b.bookingId.toString().includes(filter) || b.userId.toString().includes(filter) || getUserName(b.userId).toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(b => {
        const userName = getUserName(b.userId);
        const statusClass = b.bookingStatus === 'Cancelled' ? 'badge-cancelled' : 'badge-status';
        const actionBtn = b.bookingStatus !== 'Cancelled' 
            ? `<button class="btn-sm btn-delete cancel-booking" data-id="${b.bookingId}">❌ Cancel</button>` 
            : '--';
        
        tbody.innerHTML += `<tr>
            <td>${b.bookingId}</td><td>${b.userId}</td><td>${userName}</td>
            <td>${b.flightId}</td><td>${b.dateOfTravel}</td>
            <td>${b.seatCategory}</td><td>${b.noOfSeats}</td>
            <td>₹${b.bookingAmount.toLocaleString()}</td>
            <td><span class="${statusClass}">${b.bookingStatus}</span></td>
            <td>${actionBtn}</td>
        </tr>`;
    });
    
    document.querySelectorAll('.cancel-booking').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let bid = parseInt(btn.getAttribute('data-id'));
            cancelBookingById(bid);
        });
    });
    
    const activeCount = bookings.filter(b => b.bookingStatus !== 'Cancelled').length;
    document.getElementById('statActiveBookings').innerText = activeCount;
    document.getElementById('statUsers').innerText = users.length;
}

function cancelBookingById(bookingId) {
    const booking = bookings.find(b => b.bookingId === bookingId);
    if (!booking || booking.bookingStatus === 'Cancelled') return;
    
    const bookingDate = new Date(booking.bookingDate);
    const travelDate = new Date(booking.dateOfTravel);
    const now = new Date();
    const hoursSinceBooking = (now - bookingDate) / (1000 * 3600);
    const hoursBeforeDeparture = (travelDate - now) / (1000 * 3600);
    
    let refundPercent = 40;
    if (hoursSinceBooking <= 48) refundPercent = 100;
    else if (hoursBeforeDeparture >= 24 && hoursBeforeDeparture < 48) refundPercent = 70;
    
    const refundAmount = (booking.bookingAmount * refundPercent) / 100;
    booking.bookingStatus = "Cancelled";
    
    const schedule = flightSchedules.find(s => s.flightId === booking.flightId && s.dateOfTravel === booking.dateOfTravel);
    if (schedule) {
        if (booking.seatCategory === "Economy") schedule.economyBooked = Math.max(0, schedule.economyBooked - booking.noOfSeats);
        else if (booking.seatCategory === "Business") schedule.businessBooked = Math.max(0, schedule.businessBooked - booking.noOfSeats);
        else if (booking.seatCategory === "Executive") schedule.executiveBooked = Math.max(0, schedule.executiveBooked - booking.noOfSeats);
    }
    
    renderBookings(document.getElementById('searchBookingInput').value);
    renderFlights();
    
    const msgDiv = document.getElementById('refundMessagePanel');
    msgDiv.style.display = "block";
    msgDiv.innerHTML = `ℹ️ Booking #${bookingId} cancelled. Refund: ₹${refundAmount.toFixed(2)} (${refundPercent}% of ₹${booking.bookingAmount}).`;
    setTimeout(() => { msgDiv.style.display = "none"; }, 4000);
    updateStats();
}

function updateStats() {
    document.getElementById('statFlights').innerText = flights.length;
    document.getElementById('statActiveBookings').innerText = bookings.filter(b => b.bookingStatus !== 'Cancelled').length;
    document.getElementById('statCarriers').innerText = carriers.length;
    document.getElementById('statUsers').innerText = users.length;
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
    renderCarriers();
    renderFlights();
    renderBookings("");
    updateStats();
    
    document.getElementById('showAddCarrierBtn').addEventListener('click', () => {
        currentEditId = null;
        showCarrierForm(false, null);
    });
    document.getElementById('saveCarrierBtn').addEventListener('click', saveCarrierLogic);
    document.getElementById('cancelCarrierBtn').addEventListener('click', () => {
        document.getElementById('carrierFormContainer').style.display = 'none';
        currentEditId = null;
    });
    document.getElementById('deleteSelectedCarriersBtn').addEventListener('click', deleteSelectedCarriers);
    
    document.getElementById('viewAllFlightsBtn').addEventListener('click', viewAllFlights);
    document.getElementById('deleteSelectedFlightsBtn').addEventListener('click', deleteSelectedFlights);
    document.getElementById('showAddFlightBtn').addEventListener('click', () => {
        editingFlightId = null;
        showFlightForm(false, null);
    });
    document.getElementById('saveFlightBtn').addEventListener('click', saveFlightLogic);
    document.getElementById('cancelFlightBtn').addEventListener('click', () => {
        document.getElementById('flightFormContainer').style.display = 'none';
        editingFlightId = null;
    });
    
    document.getElementById('refreshBookingsBtn').addEventListener('click', () => {
        renderBookings(document.getElementById('searchBookingInput').value);
    });
    document.getElementById('searchBookingInput').addEventListener('input', (e) => {
        renderBookings(e.target.value);
    });
});
