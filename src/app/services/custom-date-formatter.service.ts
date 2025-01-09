import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDateFormatterService extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct | null {
    if (!value) {
      return null;
    }
    const parts = value.split('/');
    return {
      year: parseInt(parts[2], 10),
      month: parseInt(parts[0], 10),
      day: parseInt(parts[1], 10),
    };
  }

  format(date: NgbDateStruct | null): string {
    if (!date) {
      return '';
    }
    const month = date.month < 10 ? `0${date.month}` : date.month;
    const day = date.day < 10 ? `0${date.day}` : date.day;
    return `${month}/${day}/${date.year}`;
  }
}
