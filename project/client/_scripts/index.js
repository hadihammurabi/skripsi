rpc.connect('http://example.com');

function create(newPegawai) {
  return rpc.create(newPegawai);
}

function getAll() {
  return rpc.getAll();
}

function getByID(id) {
  return rpc.getByID(id);
}

function updateByID(id) {
  return rpc.updateByID(id);
}

function deleteByID(id) {
  return rpc.deleteByID(id);
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
