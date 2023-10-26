import { api } from 'core/services'
import { ReadProducts } from 'domain/interfaces/products'

export class ReadProductsService implements ReadProducts {
  async read(id?: number): Promise<ReadProducts.Result> {
    const url = id ? `/product/load/${id}` : '/product/load/'
    const response = await api.get(url)
    return response.data
  }
}
