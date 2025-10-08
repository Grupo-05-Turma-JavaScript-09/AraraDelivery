import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  // Buscar todas as categorias
  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({ order: { id: 'ASC' } });
  }

  // Buscar categoria por id
  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({ where: { id } });
    if (!categoria) {
      throw new NotFoundException(`Categoria com id ${id} não encontrada`);
    }
    return categoria;
  }

  // Criar nova categoria (apenas id e nome)
  async create(data: Partial<Categoria>): Promise<Categoria> {
    const categoria = this.categoriaRepository.create({
      id: data.id,
      nome: data.nome,
    });
    return this.categoriaRepository.save(categoria);
  }

  // Atualizar categoria (apenas nome)
  async update(id: number, data: Partial<Categoria>): Promise<Categoria> {
    const categoria = await this.findById(id);
    if (data.nome) categoria.nome = data.nome;
    return this.categoriaRepository.save(categoria);
  }

  // Deletar categoria
  async delete(id: number): Promise<void> {
    const result = await this.categoriaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Categoria com id ${id} não encontrada`);
    }
  }
}
