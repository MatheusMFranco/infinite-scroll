import { useEffect, useRef, useState } from 'react';
import env from '../environments/env';

export const find = async (page) => {
  try {
    const result = await fetch(`${env.apiUrl}/items?page=${page || 1}`);
    const data = await result.json();
    return data;
  } catch (exception) {
    console.error(exception);
  }
};
