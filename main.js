// Mock data
let prestadores = [
    {
        id: 1,
        status: 'ativo',
        nome: 'Construtora Silva & Cia Ltda',
        cnpj: '12.345.678/0001-90',
        email: 'contato@silvaecia.com',
        telefone: '(51) 3456-7890',
        representante: 'João Silva',
        endereco: 'Av. Paraná, 458 - Bairro Passo da Areia, Porto Alegre, RS'
    },
    {
        id: 2,
        status: 'ativo',
        nome: 'Tech Solutions Brasil ME',
        cnpj: '98.765.432/0001-21',
        email: 'contato@techsolutions.com.br',
        telefone: '(51) 3333-4444',
        representante: 'Maria Santos',
        endereco: 'Rua dos Andradas, 1234 - Centro, Porto Alegre, RS'
    },
    {
        id: 3,
        status: 'inativo',
        nome: 'Serviços Elétricos RS Ltda',
        cnpj: '45.678.901/0001-23',
        email: 'contato@eletricars.com.br',
        telefone: '(51) 3222-1111',
        representante: 'Pedro Oliveira',
        endereco: 'Av. Assis Brasil, 789 - São João, Porto Alegre, RS'
    },
    {
        id: 4,
        status: 'ativo',
        nome: 'Clean Service Facilities',
        cnpj: '34.567.890/0001-45',
        email: 'comercial@cleanservice.com.br',
        telefone: '(51) 3444-5555',
        representante: 'Ana Pereira',
        endereco: 'Rua Mariante, 850 - Rio Branco, Porto Alegre, RS'
    },
    {
        id: 5,
        status: 'ativo',
        nome: 'Segurança Total Ltda',
        cnpj: '23.456.789/0001-67',
        email: 'contato@segurancatotal.com.br',
        telefone: '(51) 3666-7777',
        representante: 'Carlos Mendes',
        endereco: 'Av. Ipiranga, 3456 - Santana, Porto Alegre, RS'
    }
];

let contratos = [
    {
        id: 1,
        prestadorId: 1,
        numero: '2024001',
        dataInicio: '2024-01-01',
        dataTermino: '2024-12-31',
        valor: 120000.00,
        formaPagamento: 'PIX',
        centroCusto: 'CC-001',
        status: 'ativo'
    },
    {
        id: 2,
        prestadorId: 2,
        numero: '2024002',
        dataInicio: '2024-02-01',
        dataTermino: '2025-01-31',
        valor: 85000.00,
        formaPagamento: 'TED',
        centroCusto: 'CC-002',
        status: 'ativo'
    },
    {
        id: 3,
        prestadorId: 3,
        numero: '2023050',
        dataInicio: '2023-06-01',
        dataTermino: '2024-05-31',
        valor: 45000.00,
        formaPagamento: 'PIX',
        centroCusto: 'CC-003',
        status: 'inativo'
    },
    {
        id: 4,
        prestadorId: 4,
        numero: '2024003',
        dataInicio: '2024-01-15',
        dataTermino: '2024-12-31',
        valor: 96000.00,
        formaPagamento: 'TED',
        centroCusto: 'CC-004',
        status: 'ativo'
    },
    {
        id: 5,
        prestadorId: 5,
        numero: '2024004',
        dataInicio: '2024-03-01',
        dataTermino: '2025-02-28',
        valor: 150000.00,
        formaPagamento: 'PIX',
        centroCusto: 'CC-005',
        status: 'ativo'
    }
];

let notasFiscais = [
    {
        id: 1,
        contratoId: 1,
        numero: 'NF-001',
        dataEmissao: '2024-01-31',
        valor: 10000.00,
        status: 'pago'
    },
    {
        id: 2,
        contratoId: 1,
        numero: 'NF-002',
        dataEmissao: '2024-02-29',
        valor: 10000.00,
        status: 'pendente'
    },
    {
        id: 3,
        contratoId: 2,
        numero: 'NF-101',
        dataEmissao: '2024-02-15',
        valor: 7083.33,
        status: 'pago'
    },
    {
        id: 4,
        contratoId: 4,
        numero: 'NF-201',
        dataEmissao: '2024-01-31',
        valor: 8000.00,
        status: 'pago'
    }
];

let aditivos = [
    {
        id: 1,
        contratoId: 1,
        numero: 'AD-001',
        dataInicio: '2024-12-31',
        dataTermino: '2025-12-31',
        tipo: 'Prazo',
        descricao: 'Prorrogação do contrato por 12 meses'
    },
    {
        id: 2,
        contratoId: 2,
        numero: 'AD-002',
        dataInicio: '2024-02-01',
        dataTermino: '2025-01-31',
        tipo: 'Valor',
        descricao: 'Reajuste anual de 5% no valor do contrato'
    }
];

let ferias = [
    {
        id: 1,
        prestadorId: 1,
        funcionario: 'José Silva',
        dataInicio: '2024-07-01',
        dataTermino: '2024-07-30',
        status: 'programado'
    },
    {
        id: 2,
        prestadorId: 2,
        funcionario: 'Maria Oliveira',
        dataInicio: '2024-04-15',
        dataTermino: '2024-05-14',
        status: 'aprovado'
    }
];

let decimoTerceiro = [
    {
        id: 1,
        prestadorId: 1,
        ano: 2024,
        primeiraParcela: '2024-06-30',
        segundaParcela: '2024-12-15',
        valor: 25000.00,
        status: 'programado'
    },
    {
        id: 2,
        prestadorId: 2,
        ano: 2024,
        primeiraParcela: '2024-06-30',
        segundaParcela: '2024-12-15',
        valor: 18000.00,
        status: 'programado'
    }
];

let distratos = [
    {
        id: 1,
        contratoId: 3,
        numero: 'DIS-001',
        data: '2024-05-31',
        motivo: 'Encerramento de atividades',
        valor: 0.00
    }
];

// Utility functions
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

// Check which page we're on and load appropriate content
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/') {
        loadDashboard();
    } else if (path.includes('prestadores.html')) {
        loadPrestadores();
        setupPrestadoresEventListeners();
    } else if (path.includes('prestadores-detalhes.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const prestadorId = parseInt(urlParams.get('id'));
        if (prestadorId) {
            loadPrestadorDetails(prestadorId);
        }
    }
});

// Dashboard functions
function loadDashboard() {
    const contratosAtivos = contratos.filter(c => c.status === 'ativo');
    const contratosAVencer = contratos.filter(c => {
        const termino = new Date(c.dataTermino);
        const hoje = new Date();
        const diff = Math.ceil((termino - hoje) / (1000 * 60 * 60 * 24));
        return diff <= 30 && diff > 0;
    });

    document.getElementById('totalPrestadores').textContent = prestadores.length;
    document.getElementById('contratosVigentes').textContent = contratosAtivos.length;
    document.getElementById('contratosVencer').textContent = contratosAVencer.length;
    
    const valorTotal = contratos.reduce((sum, contract) => sum + contract.valor, 0);
    document.getElementById('valorTotalContratos').textContent = formatarMoeda(valorTotal);

    loadVencimentos();
    loadPagamentos();
}

function loadVencimentos() {
    const lista = document.getElementById('vencimentosList');
    if (!lista) return;

    lista.innerHTML = '';
    
    const contratosAVencer = contratos.filter(c => {
        const termino = new Date(c.dataTermino);
        const hoje = new Date();
        const diff = Math.ceil((termino - hoje) / (1000 * 60 * 60 * 24));
        return diff <= 30 && diff > 0;
    });

    contratosAVencer.forEach(contrato => {
        const prestador = prestadores.find(p => p.id === contrato.prestadorId);
        const elemento = document.createElement('div');
        elemento.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        const termino = new Date(contrato.dataTermino);
        const hoje = new Date();
        const diasRestantes = Math.ceil((termino - hoje) / (1000 * 60 * 60 * 24));

        elemento.innerHTML = `
            <div>
                <div class="fw-bold">${prestador.nome}</div>
                <div class="text-muted">Contrato #${contrato.numero}</div>
            </div>
            <div class="text-end">
                <div class="valor">${formatarMoeda(contrato.valor)}</div>
                <div class="vencimento-dias">${diasRestantes} dias</div>
            </div>
        `;
        lista.appendChild(elemento);
    });
}

function loadPagamentos() {
    const lista = document.getElementById('pagamentosList');
    if (!lista) return;

    lista.innerHTML = '';
    
    const notasPendentes = notasFiscais.filter(nf => nf.status === 'pendente');
    
    notasPendentes.forEach(nota => {
        const contrato = contratos.find(c => c.id === nota.contratoId);
        const prestador = prestadores.find(p => p.id === contrato.prestadorId);
        const elemento = document.createElement('div');
        elemento.className = 'list-group-item d-flex justify-content-between align-items-center';
        elemento.innerHTML = `
            <div>
                <div class="fw-bold">${prestador.nome}</div>
                <div class="text-muted">NF #${nota.numero}</div>
            </div>
            <div class="text-end">
                <div class="valor">${formatarMoeda(nota.valor)}</div>
                <div class="vencimento-dias">15 dias</div>
            </div>
        `;
        lista.appendChild(elemento);
    });
}

// Prestadores functions
function loadPrestadores() {
    const tbody = document.getElementById('prestadoresTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    prestadores.forEach(prestador => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <span class="status-indicator status-${prestador.status}"></span>
            </td>
            <td><a href="prestadores-detalhes.html?id=${prestador.id}">${prestador.nome}</a></td>
            <td>${prestador.cnpj}</td>
            <td>${prestador.email}</td>
            <td>${prestador.telefone}</td>
            <td>${prestador.representante}</td>
            <td>${prestador.endereco}</td>
            <td>
                <button class="btn-action" onclick="editarPrestador(${prestador.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn-action" onclick="excluirPrestador(${prestador.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function setupPrestadoresEventListeners() {
    const btnNovoPrestador = document.getElementById('btnNovoPrestador');
    const searchPrestador = document.getElementById('searchPrestador');

    if (btnNovoPrestador) {
        btnNovoPrestador.addEventListener('click', () => {
            window.location.href = 'cadastro-prestador.html';
        });
    }

    if (searchPrestador) {
        searchPrestador.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredPrestadores = prestadores.filter(prestador => 
                prestador.nome.toLowerCase().includes(searchTerm) ||
                prestador.cnpj.includes(searchTerm)
            );
            
            const tbody = document.getElementById('prestadoresTableBody');
            tbody.innerHTML = '';
            
            filteredPrestadores.forEach(prestador => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>
                        <span class="status-indicator status-${prestador.status}"></span>
                    </td>
                    <td><a href="prestadores-detalhes.html?id=${prestador.id}">${prestador.nome}</a></td>
                    <td>${prestador.cnpj}</td>
                    <td>${prestador.email}</td>
                    <td>${prestador.telefone}</td>
                    <td>${prestador.representante}</td>
                    <td>${prestador.endereco}</td>
                    <td>
                        <button class="btn-action" onclick="editarPrestador(${prestador.id})">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn-action" onclick="excluirPrestador(${prestador.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        });
    }
}

// Provider details functions
function loadPrestadorDetails(id) {
    const prestador = prestadores.find(p => p.id === id);
    if (!prestador) {
        window.location.href = 'prestadores.html';
        return;
    }

    document.getElementById('prestadorNome').textContent = prestador.nome;
    document.getElementById('prestadorCnpj').textContent = prestador.cnpj;
    document.getElementById('prestadorEmail').textContent = prestador.email;
    document.getElementById('prestadorTelefone').textContent = prestador.telefone;

    // Load data for all tabs
    loadPrestadorContratos(id);
    loadPrestadorNotasFiscais(id);
    loadPrestadorAditivos(id);
    loadPrestadorFerias(id);
    loadPrestadorDecimoTerceiro(id);
    loadPrestadorDistrato(id);
}

function loadPrestadorContratos(prestadorId) {
    const tbody = document.getElementById('contratosTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const prestadorContratos = contratos.filter(c => c.prestadorId === prestadorId);
    
    prestadorContratos.forEach(contrato => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <span class="status-indicator status-${contrato.status}"></span>
            </td>
            <td>${prestadores.find(p => p.id === contrato.prestadorId).nome}</td>
            <td>${contrato.numero}</td>
            <td>${formatarData(contrato.dataInicio)}</td>
            <td>${formatarData(contrato.dataTermino)}</td>
            <td>${formatarMoeda(contrato.valor)}</td>
            <td>${contrato.formaPagamento}</td>
            <td>${contrato.centroCusto || '-'}</td>
            <td>
                <button class="btn-action">
                    <i class="bi bi-file-text"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function loadPrestadorNotasFiscais(prestadorId) {
    const tbody = document.getElementById('notasFiscaisTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const prestadorContratos = contratos.filter(c => c.prestadorId === prestadorId);
    const notasDoPrestador = notasFiscais.filter(nf => 
        prestadorContratos.some(c => c.id === nf.contratoId)
    );
    
    notasDoPrestador.forEach(nota => {
        const contrato = contratos.find(c => c.id === nota.contratoId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nota.numero}</td>
            <td>${formatarData(nota.dataEmissao)}</td>
            <td>${formatarMoeda(nota.valor)}</td>
            <td>${nota.status}</td>
            <td>Contrato #${contrato.numero}</td>
        `;
        tbody.appendChild(tr);
    });
}

function loadPrestadorAditivos(prestadorId) {
    const tbody = document.getElementById('aditivosTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const prestadorContratos = contratos.filter(c => c.prestadorId === prestadorId);
    const aditivosDoPrestador = aditivos.filter(a => 
        prestadorContratos.some(c => c.id === a.contratoId)
    );
    
    aditivosDoPrestador.forEach(aditivo => {
        const contrato = contratos.find(c => c.id === aditivo.contratoId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${aditivo.numero}</td>
            <td>Contrato #${contrato.numero}</td>
            <td>${formatarData(aditivo.dataInicio)}</td>
            <td>${formatarData(aditivo.dataTermino)}</td>
            <td>${aditivo.tipo}</td>
            <td>${aditivo.descricao}</td>
        `;
        tbody.appendChild(tr);
    });
}

function loadPrestadorFerias(prestadorId) {
    const tbody = document.getElementById('feriasTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const feriasDoPrestador = ferias.filter(f => f.prestadorId === prestadorId);
    
    feriasDoPrestador.forEach(ferias => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ferias.funcionario}</td>
            <td>${formatarData(ferias.dataInicio)}</td>
            <td>${formatarData(ferias.dataTermino)}</td>
            <td>${ferias.status}</td>
        `;
        tbody.appendChild(tr);
    });
}

function loadPrestadorDecimoTerceiro(prestadorId) {
    const tbody = document.getElementById('decimoTerceiroTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const decimoTerceiroDoPrestador = decimoTerceiro.filter(d => d.prestadorId === prestadorId);
    
    decimoTerceiroDoPrestador.forEach(decimo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${decimo.ano}</td>
            <td>${formatarData(decimo.primeiraParcela)}</td>
            <td>${formatarData(decimo.segundaParcela)}</td>
            <td>${formatarMoeda(decimo.valor)}</td>
            <td>${decimo.status}</td>
        `;
        tbody.appendChild(tr);
    });
}

function loadPrestadorDistrato(prestadorId) {
    const tbody = document.getElementById('distratoTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    
    const prestadorContratos = contratos.filter(c => c.prestadorId === prestadorId);
    const distratosDoPrestador = distratos.filter(d => 
        prestadorContratos.some(c => c.id === d.contratoId)
    );
    
    distratosDoPrestador.forEach(distrato => {
        const contrato = contratos.find(c => c.id === distrato.contratoId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${distrato.numero}</td>
            <td>Contrato #${contrato.numero}</td>
            <td>${formatarData(distrato.data)}</td>
            <td>${distrato.motivo}</td>
            <td>${formatarMoeda(distrato.valor)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// CRUD operations
function editarPrestador(id) {
    const prestador = prestadores.find(p => p.id === id);
    if (prestador) {
        const form = document.getElementById('formPrestador');
        form.nome.value = prestador.nome;
        form.cnpj.value = prestador.cnpj;
        form.email.value = prestador.email;
        form.telefone.value = prestador.telefone;
        form.representante.value = prestador.representante;
        form.endereco.value = prestador.endereco;
        form.status.value = prestador.status;
        
        const modalPrestador = new bootstrap.Modal(document.getElementById('modalPrestador'));
        modalPrestador.show();
    }
}

function excluirPrestador(id) {
    if (confirm('Tem certeza que deseja excluir este prestador?')) {
        prestadores = prestadores.filter(p => p.id !== id);
        loadPrestadores();
    }
}

function salvarNovoPrestador(event) {
    event.preventDefault();
    
    const form = document.getElementById('formCadastroPrestador');
    const novoPrestador = {
        id: prestadores.length + 1,
        status: form.status.value,
        nome: form.nome.value,
        cnpj: form.cnpj.value,
        email: form.email.value,
        telefone: form.telefone.value,
        representante: form.representante.value,
        endereco: form.endereco.value
    };
    
    prestadores.push(novoPrestador);
    window.location.href = 'prestadores.html';
}