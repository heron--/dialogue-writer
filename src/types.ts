type UUID = string;

export type Entity = {
  id: UUID;
  name: string;
};

export type Scene = {
  id: UUID;
  beats: Beat[];
};

export type Beat = TextBeat | SetEntityBeat | PauseBeat;

export type TextBeat = {
  type: BeatType.Text;
  text: string;
};

export type PauseBeat = {
  type: BeatType.Pause;
  duration: number;
};

export type SetEntityBeat = {
  type: BeatType.SetEntity;
  entity: Entity;
  direction?: SceneEntityDirection;
};

export enum BeatType {
  Text = "text",
  Pause = "pause",
  SetEntity = "setEntity",
}

export enum SceneEntityDirection {
  Left = "left",
  Right = "right",
}
