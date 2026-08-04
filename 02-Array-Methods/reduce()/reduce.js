// =========================
// 1. Sum Numbers
// =========================

const prices = [500, 1200, 1000];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);

// =========================
// 2. Average Marks
// =========================

const marks = [80, 65, 90, 70];

const totalMarks = marks.reduce((sum, mark) => {
    return sum + mark;
}, 0);

const average = totalMarks / marks.length;

console.log(average);

// =========================
// 3. Count Completed Orders
// =========================

const orders = [
    { status: "completed" },
    { status: "pending" },
    { status: "completed" },
    { status: "completed" }
];

const completedOrders = orders.reduce((count, order) => {
    return order.status === "completed" ? count + 1 : count;
}, 0);

console.log(completedOrders);

// =========================
// 4. Count Employees by Department
// =========================

const employees = [
    { department: "IT" },
    { department: "HR" },
    { department: "IT" },
    { department: "Finance" },
    { department: "IT" }
];

const departmentCounts = employees.reduce((acc, employee) => {
    acc[employee.department] = (acc[employee.department] || 0) + 1;
    return acc;
}, {});

console.log(departmentCounts);

// =========================
// 5. Active User Names
// =========================

const users = [
    { name: "Ram", active: true },
    { name: "Sita", active: false },
    { name: "Hari", active: true },
    { name: "Gita", active: true }
];

const activeUsers = users.reduce((acc, user) => {
    if (user.active) {
        acc.push(user.name);
    }
    return acc;
}, []);

console.log(activeUsers);

// =========================
// 6. Customer Total Orders
// =========================

const customerOrders = [
    { customer: "Ram", amount: 500 },
    { customer: "Sita", amount: 1200 },
    { customer: "Ram", amount: 300 },
    { customer: "Hari", amount: 700 },
    { customer: "Sita", amount: 800 }
];

const customerTotals = customerOrders.reduce((acc, order) => {
    acc[order.customer] = (acc[order.customer] || 0) + order.amount;
    return acc;
}, {});

console.log(customerTotals);

// =========================
// 7. Highest Sale
// =========================

const sales = [1200, 800, 2500, 1700, 3000];

const highestSale = sales.reduce((max, current) => {
    return current > max ? current : max;
}, sales[0]);

console.log(highestSale);

// =========================
// 8. Group Users by Role
// =========================

const usersByRole = [
    { name: "Ram", role: "admin" },
    { name: "Sita", role: "student" },
    { name: "Hari", role: "student" },
    { name: "Gita", role: "teacher" }
];

const groupedUsers = usersByRole.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }

    acc[user.role].push(user.name);

    return acc;
}, {});

console.log(groupedUsers);

// =========================
// 9. Shopping Cart Total
// =========================

const cart = [
    { product: "Laptop", price: 1200, quantity: 1 },
    { product: "Mouse", price: 25, quantity: 2 },
    { product: "Keyboard", price: 50, quantity: 3 }
];

const grandTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

console.log(grandTotal);