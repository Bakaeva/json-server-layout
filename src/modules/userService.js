export class UserService {
  constructor() {
    this.baseUrl = 'http://localhost:4545/users';
  };

  // метод для отправки 'GET' запросов на сервер
  getData(url) {
    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Ошибка со статусом: ${res.status}`);
        return res.json();
      })
      .catch(err => {
        console.error('Ошибка при получении данных:', err);
        this.showError();
        return []; // Возвращаем пустой массив, чтобы не ломать цепочку .then() в вызывающем коде
      });
  };

  // метод для отправки 'POST', 'PUT', 'PATCH' и 'DELETE' запросов на сервер
  sendData(url, method, data = null) {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    };
    if (data) {
      options.body = JSON.stringify(data);
    };

    return fetch(url, options)
      .then(res => {
        if (!res.ok) throw new Error(`Ошибка со статусом: ${res.status}`);
        if (method === 'DELETE') return res; // lля DELETE json-server может вернуть пустой ответ
        return res.json();
      })
      .catch(err => {
        console.error('Ошибка при отправке данных:', err);
        this.showError();
      });
  };

  // метод для работы с блоком для ошибки
  showError() {
    let errorBlock = document.getElementById('error-message');

    if (!errorBlock) {
      errorBlock = document.createElement('div');
      errorBlock.id = 'error-message';
      errorBlock.style.color = 'red';
      errorBlock.style.marginTop = '15px';
      errorBlock.style.fontWeight = 'bold';

      const table = document.querySelector('table');
      if (table) {
        table.after(errorBlock);
      } else {
        document.body.appendChild(errorBlock);
      }
    }

    errorBlock.textContent = "Произошла ошибка, данных нет!";
  };

  // метод очистки блока для ошибки
  clearError() {
    const errorBlock = document.getElementById('error-message');
    if (errorBlock) {
      errorBlock.remove();
    }
  };

  getUsers() {
    this.clearError();
    return this.getData(this.baseUrl);
  };

  addUser(user) {
    this.clearError();
    return this.sendData(this.baseUrl, 'POST', user);
  };

  removeUser(id) {
    this.clearError();
    return this.sendData(`${this.baseUrl}/${id}`, 'DELETE');
  };

  changeUser(id, data) {
    this.clearError();
    return this.sendData(`${this.baseUrl}/${id}`, 'PATCH', data);
  };

  getUser(id) {
    this.clearError();
    return this.getData(`${this.baseUrl}/${id}`);
  };

  editUser(id, user) {
    this.clearError();
    return this.sendData(`${this.baseUrl}/${id}`, 'PUT', user);
  };

  filterUsers(filterOption) {
    this.clearError();
    return this.getData(`${this.baseUrl}/?${filterOption}=true`);
  };

  getSortUsers(sortOption) {
    this.clearError();
    return this.getData(`${this.baseUrl}/?_sort=${sortOption}`);
  };

  getSearchUsers(str) {
    this.clearError();
    return this.getData(`${this.baseUrl}/?name:contains=${str}`);  // /?name_like=${str}
  };
};