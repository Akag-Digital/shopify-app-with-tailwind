"use client"
import { useEffect, useState } from "react";

export function formatPhoneNumber(phoneNumber: string): string {
  const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
  var str = phoneNumber.replace(/[^0-9]/g, "").slice(0, 11);

  return str.replace(regex, "($1) $2 - $3");
}

export function formatTime(time: string): string {
  const regex = /^([0-9]{2})([0-9]{2})$/;
  const digitsOnly = time.replace(/[^0-9]/g, "").slice(0, 4);

  return digitsOnly.replace(regex, "$1:$2");
}

export function formatMinToHour(time: string): string {
  const minutes = parseInt(time, 10);
  const hours = Math.floor(minutes / 60);
  const formattedMinutes = minutes % 60;

  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = formattedMinutes.toString().padStart(2, "0");

  return `${hoursString}:${minutesString} em ${hoursString}:${minutesString} `;
}

export function formatCurrency(value: number | string, currency: string): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  return formatter.format(value as never);
}

export function formatCreditCardNumber(cardNumber: string): string | number {
  const digitsOnly = cardNumber.replace(/\D/g, "");
  const chunkSize = 4;
  const formattedChunks: string[] = [];

  for (let i = 0; i < digitsOnly.length; i += chunkSize) {
    formattedChunks.push(digitsOnly.slice(i, i + chunkSize));
  }

  return formattedChunks.join(" ");
}

export function formatCreditCardDate(date: string): string {
  const digitsOnly = date.replace(/\D/g, "");
  const month = digitsOnly.slice(0, 2);
  const day = digitsOnly.slice(2, 4);

  return `${month}/${day}`;
}

export function device(): { isAndroid: boolean; isIos: boolean; browser: string } {
  const [deviceInfo, setDeviceInfo] = useState<{ isAndroid: boolean; isIos: boolean; browser: string }>({
    isAndroid: false,
    isIos: false,
    browser: 'Unknown',
  });

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isAndroid = /Android/.test(userAgent);
    const isIos = /iPhone|iPad|iPod/.test(userAgent);
    const browserName = getBrowserName(userAgent);
    setDeviceInfo({ isAndroid, isIos, browser: browserName });
  }, []);

  const getBrowserName = (userAgent: string) => {
    const browsers = [
      { name: 'Chrome', regex: /Chrome/ },
      { name: 'Firefox', regex: /Firefox/ },
      { name: 'Safari', regex: /Safari/ },
      { name: 'Edge', regex: /Edge/ },
      { name: 'IE', regex: /Trident|MSIE/ },
    ];

    const matchedBrowser = browsers.find((browser) => browser.regex.test(userAgent));
    return matchedBrowser ? matchedBrowser.name : 'Unknown';
  };

  return deviceInfo;
}