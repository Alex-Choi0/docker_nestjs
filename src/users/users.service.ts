import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as fs from 'fs';
import * as path from 'path';
// const fs = require('fs'); // Main requirement
// const path = require('path');

@Injectable()
export class UsersService {
  create(dto: CreateUserDto) {
    console.log("root route : ", __dirname)
    let dir = __dirname.split('/').slice(0,-2).join('/')
    console.log("split dir : ", dir)

    if(!fs.existsSync(path.join(dir, '/userData'))){
      return `해당 폴더가 존재하지 않습니다. : ${path.join(dir, '/userData')}`
    } else{
      if(!fs.existsSync(path.join(dir, '/userData', 'userText.txt'))){
        // Create file
        fs.writeFile(path.join(dir, '/userData', 'userText.txt'), `이름,성별,나이\n${dto.name},${dto.sex},${dto.age}`, function (err){

          if(err) throw err;
          console.log('Create File.....');

        })
      } else{
        // Append File
        fs.appendFile(path.join(dir, '/userData', 'userText.txt'),
        `\n${dto.name},${dto.sex},${dto.age}`, function (err){

          if(err) throw err;
          console.log('append File.....');

        })
      }
      

    }

    

    return dto;
  }

  async findAll() {
  console.log("root route : ", __dirname)
  let dir = __dirname.split('/').slice(0,-2).join('/')
  console.log("split dir : ", dir)

  // Read File
  const data = fs.readFileSync(path.join(dir, '/userData', 'userText.txt'), 'utf8');
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
