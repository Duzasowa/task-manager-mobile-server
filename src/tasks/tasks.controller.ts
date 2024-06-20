import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task as TaskModel } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(
    @Body() taskData: { title: string; description: string; status: string },
  ): Promise<TaskModel> {
    return this.tasksService.createTask(taskData);
  }

  @Get()
  async getTasks(): Promise<TaskModel[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<TaskModel> {
    return this.tasksService.getTaskById(Number(id));
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() taskData: { title?: string; description?: string; status?: string },
  ): Promise<TaskModel> {
    return this.tasksService.updateTask(Number(id), taskData);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    return this.tasksService.deleteTask(Number(id));
  }
}
