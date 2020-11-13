import { EntityAdapter, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';

function createAdapterReducers<Entity, State extends EntityState<Entity>>(
  adapter: EntityAdapter<Entity>
) {
  type IsAny<T, True, False = never> = true | false extends (T extends never ? true : false)
    ? True
    : False;
  type PreventAny<S, T> = IsAny<S, EntityState<T>, S>;
  return {
    addOne(state: PreventAny<State, Entity>, payload: PayloadAction<Entity>) {
      adapter.addOne(state, payload);
    },
    addMany(
      state: PreventAny<State, Entity>,
      payload: PayloadAction<Entity[] | Record<EntityId, Entity>>
    ) {
      adapter.addMany(state, payload);
    },
    setAll(
      state: PreventAny<State, Entity>,
      payload: PayloadAction<Entity[] | Record<EntityId, Entity>>
    ) {
      adapter.setAll(state, payload);
    },
    removeOne(state: PreventAny<State, Entity>, payload: PayloadAction<EntityId>) {
      adapter.removeOne(state, payload);
    },
    removeMany(state: PreventAny<State, Entity>, payload: PayloadAction<EntityId[]>) {
      adapter.removeMany(state, payload);
    },
    removeAll(state: PreventAny<State, Entity>) {
      adapter.removeAll(state);
    },
    updateOne(state: PreventAny<State, Entity>, payload: PayloadAction<Update<Entity>>) {
      adapter.updateOne(state, payload);
    },
    updateMany(state: PreventAny<State, Entity>, payload: PayloadAction<Update<Entity>[]>) {
      adapter.updateMany(state, payload);
    },
    upsertOne(state: PreventAny<State, Entity>, payload: PayloadAction<Entity>) {
      adapter.upsertOne(state, payload);
    },
    upsertMany(
      state: PreventAny<State, Entity>,
      payload: PayloadAction<Entity[] | Record<EntityId, Entity>>
    ) {
      adapter.upsertMany(state, payload);
    },
  };
}

type createAdapterReducers = typeof createAdapterReducers;
export { createAdapterReducers };
