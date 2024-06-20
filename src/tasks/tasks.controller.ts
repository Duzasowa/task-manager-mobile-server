import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task as TaskModel } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(
    @Body()
    taskData: {
      title: string;
      description: string;
      status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
    },
  ): Promise<TaskModel> {
    try {
      return this.tasksService.createTask(taskData);
    } catch (error) {
      throw new HttpException('Error creating task', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async getTasks(): Promise<TaskModel[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<TaskModel> {
    try {
      return this.tasksService.getTaskById(Number(id));
    } catch (error) {
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body()
    taskData: {
      title?: string;
      description?: string;
      status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
    },
  ): Promise<TaskModel> {
    try {
      return this.tasksService.updateTask(Number(id), taskData);
    } catch (error) {
      throw new HttpException('Error updating task', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<TaskModel> {
    try {
      return this.tasksService.deleteTask(Number(id));
    } catch (error) {
      throw new HttpException('Error deleting task', HttpStatus.BAD_REQUEST);
    }
  }
}
