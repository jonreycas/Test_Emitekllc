package com.emitekllc.backend.controller;

import com.emitekllc.backend.model.Nota;
import com.emitekllc.backend.repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/api")
public class NotaController {

    @Autowired
    NotaRepository noteRepository;

    @GetMapping("/nota")
    public List<Nota> getAllNotas() {
        return noteRepository.findAll();
    }

    @GetMapping("/nota/{id}")
    public ResponseEntity<Nota> getNotaById(@PathVariable(value = "id") Long noteId) {
        Nota note = noteRepository.findOne(noteId);
        if(note == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(note);
    }

    @PostMapping("/nota")
    public Nota createNota(@Valid @RequestBody Nota note) {
        return noteRepository.save(note);
    }

    @PutMapping("/nota/{id}")
    public ResponseEntity<Nota> updateNota(@PathVariable(value = "id") Long noteId,
                                           @Valid @RequestBody Nota noteDetails) {
        Nota note = noteRepository.findOne(noteId);
        if(note == null) {
            return ResponseEntity.notFound().build();
        }
        note.setTitulo(noteDetails.getTitulo());
        note.setContenido(noteDetails.getContenido());
        note.setUsuario(noteDetails.getUsuario());

        Nota updatedNota = noteRepository.save(note);
        return ResponseEntity.ok(updatedNota);
    }

    @DeleteMapping("/nota/{id}")
    public ResponseEntity<Nota> deleteNota(@PathVariable(value = "id") Long noteId) {
        Nota note = noteRepository.findOne(noteId);
        if(note == null) {
            return ResponseEntity.notFound().build();
        }

        noteRepository.delete(note);
        return ResponseEntity.ok().build();
    }
}
