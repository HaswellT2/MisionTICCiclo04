package com.JulioMisionTiC.Misiontic4.controller;

import com.JulioMisionTiC.Misiontic4.models.TareaEquipo;
import com.JulioMisionTiC.Misiontic4.repository.TareaEquipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Tareas")

public class TareaEquipoController {

    @Autowired
    private TareaEquipoRepository tareaEquipoRepository;

    @GetMapping("")
    List<TareaEquipo> index() {
        return tareaEquipoRepository.findAll();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    TareaEquipo Create(@RequestBody TareaEquipo tareaEquipo) {
        return tareaEquipoRepository.save(tareaEquipo);
    }

    @PutMapping("{id}")
    TareaEquipo update (@PathVariable String id,@RequestBody TareaEquipo tareaEquipo) {
        TareaEquipo tareaEquipoput = tareaEquipoRepository.findById(id).orElseThrow(RuntimeException::new);

        tareaEquipoput.setNombre(tareaEquipo.getNombre());
        tareaEquipoput.setCompletado(tareaEquipo.isCompletado());

        return tareaEquipoRepository.save(tareaEquipoput);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete (@PathVariable String id) {
        TareaEquipo tareaEquipodelete = tareaEquipoRepository.findById(id).orElseThrow(RuntimeException::new);

        tareaEquipoRepository.delete(tareaEquipodelete);
    }
}
