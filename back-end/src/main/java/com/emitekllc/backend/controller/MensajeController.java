package com.emitekllc.backend.controller;

import com.emitekllc.backend.model.Mensaje;
import com.emitekllc.backend.repository.MensajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/api")
public class MensajeController {

    @Autowired
    MensajeRepository mensajeRepository;

    @GetMapping("/mensaje")
    public List<Mensaje> getAllMensajes() {
        return mensajeRepository.findAll();
    }

    @GetMapping("/mensaje/{id}")
    public ResponseEntity<Mensaje> getMensajeById(@PathVariable(value = "id") Long dataId) {
        Mensaje data = mensajeRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(data);
    }

    @PostMapping("/mensaje")
    public Mensaje createMensaje(@Valid @RequestBody Mensaje data) {
        return mensajeRepository.save(data);
    }

    @PutMapping("/mensaje/{id}")
    public ResponseEntity<Mensaje> updateMensaje(@PathVariable(value = "id") Long dataId,
                                           @Valid @RequestBody Mensaje dataDetails) {
        Mensaje data = mensajeRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        data.setRemitente(dataDetails.getRemitente());
        data.setDestinatario(dataDetails.getDestinatario());

        Mensaje updatedMensaje = mensajeRepository.save(data);
        return ResponseEntity.ok(updatedMensaje);
    }

    @DeleteMapping("/mensaje/{id}")
    public ResponseEntity<Mensaje> deleteMensaje(@PathVariable(value = "id") Long dataId) {
        Mensaje data = mensajeRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }

        mensajeRepository.delete(data);
        return ResponseEntity.ok().build();
    }
}
