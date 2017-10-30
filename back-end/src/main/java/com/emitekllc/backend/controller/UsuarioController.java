package com.emitekllc.backend.controller;

import com.emitekllc.backend.model.Usuario;
import com.emitekllc.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/usuario")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/usuariov/{cuenta}")
    public ResponseEntity<Usuario> getUsuarioByCuenta(@PathVariable(value = "cuenta") String dataCuenta) {
        Usuario data = usuarioRepository.findByCuenta(dataCuenta);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(data);
    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable(value = "id") Long dataId) {
        Usuario data = usuarioRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(data);
    }

    @PostMapping("/usuario")
    public Usuario createUsuario(@Valid @RequestBody Usuario data) {
        return usuarioRepository.save(data);
    }

    @PutMapping("/usuario/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable(value = "id") Long dataId,
                                           @Valid @RequestBody Usuario dataDetails) {
        Usuario data = usuarioRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        data.setNombre(dataDetails.getNombre());
        data.setCuenta(dataDetails.getCuenta());
        data.setClave(dataDetails.getClave());
        data.setSexo(dataDetails.getSexo());

        Usuario updatedUsuario = usuarioRepository.save(data);
        return ResponseEntity.ok(updatedUsuario);
    }

    @DeleteMapping("/usuario/{id}")
    public ResponseEntity<Usuario> deleteUsuario(@PathVariable(value = "id") Long dataId) {
        Usuario data = usuarioRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }

        usuarioRepository.delete(data);
        return ResponseEntity.ok().build();
    }
}
