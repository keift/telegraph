import axios from 'axios';
import telegraph from 'telegraph.md';
import fs from 'fs';
import path from 'path';

/**
 * Yazılım Topluluğu Kuralları
 */
const yazilim_toplulugu_rules_path = path.join('./', 'mds', 'yazilim-toplulugu-rules.md');

await axios.post('https://api.telegra.ph/editPage', {
  path: 'rules-12-01-151',
  title: 'Yazılım Topluluğu Kuralları',
  author_name: 'Yazılım Topluluğu',
  author_url: 'https://t.me/yazilimtoplulugu',
  content: telegraph(fs.readFileSync(yazilim_toplulugu_rules_path, 'utf-8')),
  access_token: process.env.YAZILIM_TOPLULUGU_TELEGRAPH_ACCESS_TOKEN
});
