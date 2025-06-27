import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ArrowLeft, Upload, X, Plus } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { Product } from '../types';

const ProductManager: React.FC = () => {
  const { state, addProduct, updateProduct, deleteProduct } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    originalPrice: 0,
    images: [''],
    category: 'tees' as Product['category'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    description: '',
    featured: false,
    newArrival: false,
    inStock: true,
    stockCount: 0
  });

  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      images: formData.images.filter(img => img.trim() !== ''),
      sizes: formData.sizes.filter(size => size.trim() !== ''),
      colors: formData.colors.filter(color => color.trim() !== '')
    };

    if (isEditing && editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      originalPrice: 0,
      images: [''],
      category: 'tees',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      description: '',
      featured: false,
      newArrival: false,
      inStock: true,
      stockCount: 0
    });
    setIsEditing(false);
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice || 0,
      images: product.images,
      category: product.category,
      sizes: product.sizes,
      colors: product.colors,
      description: product.description,
      featured: product.featured || false,
      newArrival: product.newArrival || false,
      inStock: product.inStock || true,
      stockCount: product.stockCount || 0
    });
    setEditingProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  const addImageField = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const removeImageField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const updateImageField = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map((img, i) => i === index ? value : img)
    }));
  };

  const addSizeField = () => {
    setFormData(prev => ({
      ...prev,
      sizes: [...prev.sizes, '']
    }));
  };

  const removeSizeField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.filter((_, i) => i !== index)
    }));
  };

  const updateSizeField = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.map((size, i) => i === index ? value : size)
    }));
  };

  const addColorField = () => {
    setFormData(prev => ({
      ...prev,
      colors: [...prev.colors, '']
    }));
  };

  const removeColorField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index)
    }));
  };

  const updateColorField = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors.map((color, i) => i === index ? value : color)
    }));
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={resetForm}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Products</span>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEditing ? 'Edit Product' : 'Add New Product'}
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as Product['category'] }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="tees">Tees</option>
                    <option value="hoodies">Hoodies</option>
                    <option value="bottoms">Bottoms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Original Price (Optional)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, originalPrice: parseFloat(e.target.value) }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock Count
                  </label>
                  <input
                    type="number"
                    value={formData.stockCount}
                    onChange={(e) => setFormData(prev => ({ ...prev, stockCount: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Images */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Images *
                  </label>
                  <button
                    type="button"
                    onClick={addImageField}
                    className="flex items-center space-x-1 text-orange-500 hover:text-orange-600"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Image</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.images.map((image, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="url"
                        value={image}
                        onChange={(e) => updateImageField(index, e.target.value)}
                        placeholder="Enter image URL"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      {formData.images.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeImageField(index)}
                          className="p-2 text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Available Sizes *
                  </label>
                  <button
                    type="button"
                    onClick={addSizeField}
                    className="flex items-center space-x-1 text-orange-500 hover:text-orange-600"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Size</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {formData.sizes.map((size, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={size}
                        onChange={(e) => updateSizeField(index, e.target.value)}
                        placeholder="Size"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      {formData.sizes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSizeField(index)}
                          className="p-1 text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Available Colors *
                  </label>
                  <button
                    type="button"
                    onClick={addColorField}
                    className="flex items-center space-x-1 text-orange-500 hover:text-orange-600"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Color</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {formData.colors.map((color, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => updateColorField(index, e.target.value)}
                        placeholder="Color"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      {formData.colors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeColorField(index)}
                          className="p-1 text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                    Featured Product
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newArrival"
                    checked={formData.newArrival}
                    onChange={(e) => setFormData(prev => ({ ...prev, newArrival: e.target.checked }))}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newArrival" className="ml-2 text-sm text-gray-700">
                    New Arrival
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={formData.inStock}
                    onChange={(e) => setFormData(prev => ({ ...prev, inStock: e.target.checked }))}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
                    In Stock
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200"
                >
                  {isEditing ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Add New Product
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex space-x-1">
                    {product.featured && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                    {product.newArrival && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.category}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-orange-600 hover:text-orange-800 font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductManager;