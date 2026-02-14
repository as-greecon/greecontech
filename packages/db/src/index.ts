export interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<void>;
}

export interface DatabaseAdapter {
  kind: "placeholder";
  status: "not-configured";
}

export const placeholderAdapter: DatabaseAdapter = {
  kind: "placeholder",
  status: "not-configured"
};
