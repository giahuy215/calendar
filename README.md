# Project Calendar for Interview

## Answer the questions/tasks

### 1. Propose a data structure to use for this screen. How the backend should return data to you. Please explain why you choose this structure.

In my opinion, there are 2 ways to display data structures for this screen, which are hash table and array. I choose array to display data in the following form:

- type = 1: Event
- type = 2: Appointment

```typescript
{
	"status": 200,
	"message": "Success",
	"totalItems": 4,
	"items": [
		{
			"id": 1,
			"type": 2,
			"title": "Khám sức khỏe",
			"dateInMonth": 15,
			"start": "10:00",
			"end": "11:00"
		},
		...
	]
}
```

Because I want to call API with param `month` to get events and appointments in that month:

```typescript
  GET /api/calendar?month=2025-02
```

### 2. Develop and send us a preview of your work. BONUS: Design and develop the Recurring event. Propose a few ways on how you will do this

My suggestion to handle recurring events is to add a recurrent field to the API when an appointment or event is created.

| Case           | Data                                                                               |
| -------------- | ---------------------------------------------------------------------------------- |
| Not recurrence | `recurrence: null`                                                                 |
| DAILY          | `recurrence: { "frequency": "DAILY", "interval": 1 }`                              |
| WEEKLY         | `recurrence: { "frequency": "WEEKLY", "interval": 1, "days_of_week": ["Monday"] }` |
| MONTHLY        | `recurrence: { "frequency": "MONTHLY", "interval": 1, "day_of_month": 15 }`        |

E.g:

- `recurrence: { "frequency": "WEEKLY", "interval": 1, "days_of_week": ["Monday"] }` repeat every monday
- `recurrence: { "frequency": "WEEKLY", "interval": 2, "days_of_week": ["Monday", "Saturday"] }` repeat on Monday and Saturday every 2 weeks

### 3. Please public your source code repository so we can access it.

My source code: [https://github.com/giahuy215/calendar](https://github.com/giahuy215/calendar)

### 4. Let us know what you have learned from this project

- How to build UI a event/appointment calendar website app
- Handle recurring events
- Distinguish between event and appointment
- Learned more about write README file.

### 5. Let us know if you can continue to develop this project, and what will you work on. These could be concepts that you’re still not completely done with or some features that you think could make this layout better.

Features I can develop if I continue to work on calendar project:

- Developing Login feature to save appointments/events for every users.
- Developing Event detail feature to see detail and notes of event.
- Developing Create new event/appointment feature.
- I think we can add special day in a year to Calendar. E.g: New Year, Lunar New Year, Independence Day,...
- Adding new types "birthday", "anniversary" and remind before one days.

**_Thanks for your reading!_**
