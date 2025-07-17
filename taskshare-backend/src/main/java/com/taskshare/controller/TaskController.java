package com.taskshare.controller;

import com.taskshare.model.Task;
import com.taskshare.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }

    @PatchMapping("/{id}")
    public Task updateTaskPartially(@PathVariable Long id, @RequestBody Task updatedTask) {
        return taskRepository.findById(id).map(task -> {
            if (updatedTask.getTitle() != null) {
                task.setTitle(updatedTask.getTitle());
            }
            if (updatedTask.getDescription() != null) {
                task.setDescription(updatedTask.getDescription());
            }
            if (updatedTask.getStatus() != null) {
                task.setStatus(updatedTask.getStatus());
            }
            if (updatedTask.getUser() != null) {
                task.setUser(updatedTask.getUser());
            }
            return taskRepository.save(task);
        }).orElse(null);
    }


}
