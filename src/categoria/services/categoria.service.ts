import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      relations: { produtos: true },
    });
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
      relations: { produtos: true },
    });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categoria;
  }

  async findByNome(nome: string): Promise<Categoria[]> {
    const categorias = await this.categoriaRepository.find({
      where: { nome: ILike(`%${nome}%`) },
      relations: { produtos: true },
    });

    if (!categorias || categorias.length === 0) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categorias;
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    const categoriaExistente = await this.findById(categoria.id);
    if (!categoriaExistente) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    const categoriaExistente = await this.findById(id);
    if (!categoriaExistente) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return await this.categoriaRepository.delete(id);
  }
}