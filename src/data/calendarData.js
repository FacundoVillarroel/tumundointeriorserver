export const calendarEvents = {
  kind: "calendar#events",
  etag: '"p33kdr7sss2som0o"',
  summary: "prueba",
  description: "",
  updated: "2025-02-10T18:38:26.017Z",
  timeZone: "America/Santiago",
  accessRole: "owner",
  defaultReminders: [],
  items: [
    {
      kind: "calendar#event",
      etag: '"3478425412034000"',
      id: "6jr0isdlv0gbmsjev1j34u2sgq",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=NmpyMGlzZGx2MGdibXNqZXYxajM0dTJzZ3EgNDlhNGE3NTIxMmNkNzE4NmVlOWQ0MjllNTMzNWZiMmEwYWFmNTQ0MWJjYzYxZWEyZWMzMzM2MWUxN2FmNDIyMEBn",
      created: "2025-02-10T18:38:26.000Z",
      updated: "2025-02-10T18:38:26.017Z",
      creator: {
        email: "facu.villarroel96@gmail.com"
      },
      organizer: {
        email: "49a4a75212cd7186ee9d429e5335fb2a0aaf5441bcc61ea2ec33361e17af4220@group.calendar.google.com",
        displayName: "prueba",
        self: true
      },
      start: {
        dateTime: "2025-02-11T19:00:00-03:00",
        timeZone: "America/Santiago"
      },
      end: {
        dateTime: "2025-02-11T20:00:00-03:00",
        timeZone: "America/Santiago"
      },
      iCalUID: "6jr0isdlv0gbmsjev1j34u2sgq@google.com",
      sequence: 0,
      reminders: {
        useDefault: true
      },
      eventType: "default"
    }
  ]
};

//If there are not events.
/* {
  "error": 1,
  "code": 200,
  "info": "No upcoming events found."
} */