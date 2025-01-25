const WEBHOOK_URL = "";

function getData() {
  try {
    const date = new Date();
    const URI =
      "https://hari-libur-api.vercel.app/api?month=" + (date.getMonth() + 1);
    const request = UrlFetchApp.fetch(URI);
    const response = JSON.parse(request);
    return response;
  } catch (err) {
    return null;
  }
}

function logAndFilterEvents(date, data) {
  return data.filter((d) => d.event_date == date);
}

function formatDate(date) {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
}

function createDiscordPayload(data, formattedDate) {
  let description = `Hari ini pada tanggal ${formattedDate} diperingati sebagai ${data.event_name}.`;
  if (data.is_national_holiday) description += ` Selamat hari libur nasional!`;

  return {
    content: "@everyone",
    embeds: [
      {
        title: "Selamat " + data.event_name,
        description: description,
        color: 12058624,
      },
    ],
    username: "Warga Negara Yang Baik",
    avatar_url:
      "https://flagdownload.com/wp-content/uploads/Flag_of_Indonesia_Flat_Round.png",
    attachments: [],
  };
}

function sendToDiscord(data) {
  const date = new Date();
  const formattedDate = formatDate(date);
  const discordPayload = createDiscordPayload(data, formattedDate);

  const options = {
    contentType: "application/json",
    muteHttpExceptions: true,
    method: "post",
    payload: JSON.stringify(discordPayload),
  };

  const response = UrlFetchApp.fetch(WEBHOOK_URL, options);
  Logger.log("Successfully sent to Discord.");
}
function main() {
  const date = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const data = getData();
  const sameDayEvents = logAndFilterEvents(date, data);
  if (sameDayEvents.length < 1) return;
  sendToDiscord(sameDayEvents[0]);
}
