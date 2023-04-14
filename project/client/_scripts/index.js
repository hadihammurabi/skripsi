rpc.connect('http://localhost:8080');

function create(newPegawai) {
  return rpc.create(newPegawai);
}

function getAll() {
  return rpc.getAll();
}

function getById(id) {
  return rpc.getById(id);
}

function edit(id, newPegawai) {
  return rpc.edit(id, newPegawai);
}

function del(id) {
  return rpc.del(id);
}

const messageEmpty = `
<tr>
  <td colspan="7" class="text-center">
    Tidak ada data
  </td>
</tr>
`;

const messageLoading = `
<tr>
  <td colspan="7" class="text-center">
    Menunggu...
  </td>
</tr>
`;
