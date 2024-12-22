# Azərbaycan Dilində Ata Sözləri üçün API
  içərisində 1500-dən çox atasözü mövcuddur.

| Başlıqlar                                          | URL                                   | Nəticə                                                       |
| -------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| **Bütün atasözlərini görmək üçün**                  | `GET /api/proverbs`                   | Bütün atasözlərini JSON görə bilərsiniz.                |
| **Hərfə görə axtarış etmək**          | `GET /api/proverbs/:letter`           | İstədiyiniz hərfi (məsələn: a, b, c) yaza bilərsiniz.              |
| **Random atasözlərini görmək üçün**                 | `GET /api/proverbs/random`            | 10 dənə random  atasözü gətirir.                          |
| **Bir atasözünü hərf  və id-yə gətirmək**                | `GET /api/proverbs/:letter/:id`       | İstədiyiniz hərf və ID ilə konkret atasözünü əldə edirsiniz. |

## Nümunələr

## 1. Bütün atasözlərini görmək
```javascript
fetch('https://atasozleri-api.onrender.com/api/proverbs')
  .then(response => response.json())
  .then(data => {
    console.log('Bütün atasözləri:', data);
  })
  .catch(error => {
    console.error('err:', error);
  });
```
## 2. Hərfə görə axtarış etmək
```javascript
fetch('https://atasozleri-api.onrender.com/api/proverbs/a')
  .then(response => response.json())
  .then(data => {
    console.log('a hərfi ilə əlaqəli atasözləri:', data);
  })
  .catch(error => {
    console.error('err:', error);
  });
```
## 3. Random 10 dənə atasözü gətirmək
```javascript
fetch('https://atasozleri-api.onrender.com/api/proverbs/random')
  .then(response => response.json())
  .then(data => {
    console.log('random atasözləri:', data);
  })
  .catch(error => {
    console.error('err:', error);
  });
```
## 4. Hərf və id-yə görə axtarış etmək
```javascript
fetch('https://atasozleri-api.onrender.com/api/proverbs/a/1')
  .then(response => response.json())
  .then(data => {
    console.log('ID ilə atasözü:', data);
  })
  .catch(error => {
    console.error('Xəta:', error);
  });
```
