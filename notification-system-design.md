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

