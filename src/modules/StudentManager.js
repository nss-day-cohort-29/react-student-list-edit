const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/students/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/students`).then(e => e.json());
  },
  put(studentId, existingStudent) {
    return fetch(`${remoteURL}/students/${studentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingStudent)
    }).then(data => data.json());
  }
};
