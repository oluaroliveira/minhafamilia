function expandir(id) {
    // Função para expandir informações de um membro
    alert(`Expandindo informações de ${id}`);
}

document.getElementById('casado').addEventListener('change', function() {
    const infoCasamento = document.getElementById('infoCasamento');
    infoCasamento.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('falecido').addEventListener('change', function() {
    const infoObito = document.getElementById('infoObito');
    infoObito.style.display = this.checked ? 'block' : 'none';
});

function excluirMembro() {
    if (confirm('Tem certeza que deseja excluir este membro?')) {
        alert('Membro excluído com sucesso!');
    }
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Usuário cadastrado com sucesso!');
});

document.getElementById('edicaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Membro salvo com sucesso!');
});