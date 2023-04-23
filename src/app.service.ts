import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  shuffleObject(obj): any {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (typeof value === 'string') {
        obj[key] = value
          .split('')
          .sort(() => Math.random() - 0.5)
          .join('');
      } else if (typeof value === 'number') {
        const digits = value.toString().split('');
        for (let i = digits.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [digits[i], digits[j]] = [digits[j], digits[i]];
        }
        obj[key] = parseInt(digits.join(''), 10);
      }
    });
    return obj;
  }
}
