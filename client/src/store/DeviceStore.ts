import { makeAutoObservable } from "mobx";
import { Brand } from "src/shared/types/brand";
import { Device } from "src/shared/types/device";
import { Type } from "src/shared/types/type";
import { fetchBrands } from "src/shared/api/brand/fetch-brands";
import { fetchTypes } from "src/shared/api/type/fetch-types";
import {
  fetchDevice,
  FetchDeviceRequest,
} from "src/shared/api/device/fetch-device";

export default class DeviceStore {
  _types: Type[];
  _brands: Brand[];
  _devices: Device[];
  _selectedType: Type | null;
  _selectedBrand: Brand | null;
  _pages: number;
  _page: number;
  _totalItems: number;
  _limit: number;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;
    this._page = 1;
    this._totalItems = 0;
    this._pages = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types: Type[]) {
    this._types = types;
  }
  setBrands(brands: Brand[]) {
    this._brands = brands;
  }
  setDevices(devices: Device[]) {
    this._devices = devices;
  }

  setTotalItems(total: number) {
    this._totalItems = total;
  }
  setPages(total: number, limit: number) {
    this._pages = Math.ceil(total / limit);
  }
  setPage(page: number) {
    this._page = page;
  }

  async fetchTypes() {
    const types = await fetchTypes();
    this.setTypes(types);
  }

  async fetchBrands() {
    const brands = await fetchBrands();
    this.setBrands(brands);
  }

  async fetchDevice(params: FetchDeviceRequest) {
    const data = await fetchDevice(params);
    this.setDevices(data.rows);
    this.setTotalItems(data.count);
    this.setPages(data.count, this.limit);
  }

  setSelectedType(type: Type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand: Brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get totalItems() {
    return this._totalItems;
  }
  get limit() {
    return this._limit;
  }
  get pages() {
    return this._pages;
  }
  get page() {
    return this._page;
  }
}
