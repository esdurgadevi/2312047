# Notification System Design
# Stage 1

## Base URL

```
http://localhost:5000/api
```


# 1. Create Notification

**Endpoint**

```
POST http://localhost:5000/api/notifications
```

### Request Headers

```
Content-Type: application/json
Authorization: Bearer <token>
```

### Request Body

```json
{
    "id": 101,
    "title": "Placement Notification",
    "priority": "High",
    "status": "Unread",
    "category": "Placement",
    "message": "Afford Medical Technologies placement drive has started."
}
```

### Success Response

```json
{
    "success": true,
    "message": "Notification created successfully.",
    "data": {
        "id": 101,
        "title": "Placement Notification",
        "priority": "High",
        "status": "Unread",
        "category": "Placement",
        "message": "Afford Medical Technologies placement drive has started."
    }
}
```


# 2. Get All Notifications

**Endpoint**

```
GET http://localhost:5000/api/notifications
```

### Request Headers

```
Authorization: Bearer <token>
```

### Success Response

```json
{
    "success": true,
    "count": 2,
    "data": [
        {
            "id": 101,
            "title": "Placement Notification",
            "priority": "High",
            "status": "Unread",
            "category": "Placement",
            "message": "Afford Medical Technologies placement drive has started."
        },
        {
            "id": 102,
            "title": "Exam Result",
            "priority": "Medium",
            "status": "Read",
            "category": "Result",
            "message": "Semester 6 results have been published."
        }
    ]
}
```


# 3. Get Notification by ID

**Endpoint**

```
GET http://localhost:5000/api/notifications/101
```

### Request Headers

```
Authorization: Bearer <token>
```

### Success Response

```json
{
    "success": true,
    "data": {
        "id": 101,
        "title": "Placement Notification",
        "priority": "High",
        "status": "Unread",
        "category": "Placement",
        "message": "Afford Medical Technologies placement drive has started."
    }
}
```


# 4. Update Notification

**Endpoint**

```
PUT http://localhost:5000/api/notifications/101
```

### Request Headers

```
Content-Type: application/json
Authorization: Bearer <token>
```

### Request Body

```json
{
    "title": "Placement Notification Updated",
    "priority": "Medium",
    "status": "Unread",
    "category": "Placement",
    "message": "Placement drive timing has been updated."
}
```

### Success Response

```json
{
    "success": true,
    "message": "Notification updated successfully.",
    "data": {
        "id": 101,
        "title": "Placement Notification Updated",
        "priority": "Medium",
        "status": "Unread",
        "category": "Placement",
        "message": "Placement drive timing has been updated."
    }
}
```


# 5. Mark Notification as Read

**Endpoint**

```
PATCH http://localhost:5000/api/notifications/101/read
```

### Request Headers

```
Authorization: Bearer <token>
```

### Success Response

```json
{
    "success": true,
    "message": "Notification marked as read.",
    "data": {
        "id": 101,
        "status": "Read"
    }
}
```


# 6. Delete Notification

**Endpoint**

```
DELETE http://localhost:5000/api/notifications/101
```

### Request Headers

```
Authorization: Bearer <token>
```

### Success Response

```json
{
    "success": true,
    "message": "Notification deleted successfully."
}
```


# Common Error Response

```json
{
    "success": false,
    "message": "Notification not found."
}
```

# Stage 2

# Database Choice

Database : MySQL

### Why MySQL?

- MySQL is a relational database.
- It stores notification data in a structured format.
- It provides good performance for CRUD operations.
- It ensures data consistency and reliability.
- It is easy to maintain and widely used.

---

# Database Schema

Database Name : notification_system

Table Name : notifications

Fields

- id (INT, Primary Key)
- title (VARCHAR(100))
- priority (VARCHAR(20))
- status (VARCHAR(20))
- category (VARCHAR(50))
- message (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

SQL to Create Table

```sql
CREATE TABLE notifications (
    id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    priority VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    category VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

# Problems When Data Increases

- Large number of notifications increases database size.
- Fetching notifications becomes slower.
- Searching notifications takes more time.
- Response time may increase.

---

# Solutions

- Create indexes on frequently searched columns.
- Use pagination while fetching notifications.
- Archive old notifications.
- Delete unnecessary notifications regularly.
- Optimize SQL queries.

---

# SQL Queries

## 1. Create Notification

```sql
INSERT INTO notifications
(id, title, priority, status, category, message)
VALUES
(
101,
'Placement Notification',
'High',
'Unread',
'Placement',
'Afford Medical Technologies placement drive has started.'
);
```

---

## 2. Get All Notifications

```sql
SELECT * FROM notifications;
```

---

## 3. Get Notification By ID

```sql
SELECT *
FROM notifications
WHERE id = 101;
```

---

## 4. Update Notification

```sql
UPDATE notifications
SET
title = 'Placement Notification Updated',
priority = 'Medium',
status = 'Unread',
category = 'Placement',
message = 'Placement drive timing has been updated.'
WHERE id = 101;
```

---

## 5. Mark Notification as Read

```sql
UPDATE notifications
SET status = 'Read'
WHERE id = 101;
```

---

## 6. Delete Notification

```sql
DELETE FROM notifications
WHERE id = 101;
```