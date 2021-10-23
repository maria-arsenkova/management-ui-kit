export  type TaskDescriptionType = {
  taskDescription?: string;
  onSave: (newDescription: string)=> void;
  onChange: (newDescription: string)=> void;
}
