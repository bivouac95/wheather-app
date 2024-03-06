const timezones = {
  "-43200": [-12, 0],
  "-39600": [-11, 0],
  "-36000": [-10, 0],
  "-34200": [-9, 30],
  "-32400": [-9, 0],
  "-28800": [-8, 0],
  "-25200": [-7, 0],
  "-21600": [-6, 0],
  "-18000": [-5, 0],
  "-16200": [-4, 30],
  "-14400": [-4, 0],
  "-12600": [-3, 30],
  "-10800": [-3, 0],
  "-7200": [-2, 0],
  "-3600": [-1, 0],
  0: [0, 0],
  3600: [1, 0],
  7200: [2, 0],
  10800: [3, 0],
  12600: [3, 30],
  14400: [4, 0],
  16200: [4, 30],
  18000: [5, 0],
  19800: [5, 30],
  20700: [5, 45],
  21600: [6, 0],
  23400: [6, 30],
  25200: [7, 0],
  28800: [8, 0],
  32400: [9, 0],
  34200: [9, 30],
  36000: [10, 0],
  37800: [10, 30],
  39600: [11, 0],
  41400: [11, 30],
  43200: [12, 0],
  45900: [12, 45],
  46800: [13, 0],
  50400: [14, 0],
};

function getDateByTimezone(timezone, type = 'array') {
  if (!timezone in timezones) {
    console.error(`Часовой пояс ${timezone} не зарегестрирован`);
    return;
  }

  let date = new Date();
  let hours = date.getUTCHours() + timezones[timezone][0];
  if (hours < 0) {
    hours += 24;
  } else {
    if (hours > 24) {
      hours -= 24;
    }
  }

  let minutes = date.getUTCMinutes() + timezones[timezone][1];
  if (minutes < 0) {
    hours--;
    minutes += 60;
  } else {
    if (minutes > 60) {
      hours++;
      minutes -= 60;
    }
  }

  switch( type ){
    case 'array' :
        return [hours, minutes];
        break;
    case 'string' :
        return `${String(hours).length == 1 ? `0${hours}` : hours}:${String(minutes).length == 1 ? `0${minutes}` : minutes}`
        break;
  }
}

export default getDateByTimezone;
