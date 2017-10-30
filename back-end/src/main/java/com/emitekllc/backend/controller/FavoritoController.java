package com.emitekllc.backend.controller;

import com.emitekllc.backend.model.Favorito;
import com.emitekllc.backend.repository.FavoritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/api")
public class FavoritoController {

    @Autowired
    FavoritoRepository favoritoRepository;

    @GetMapping("/favorito")
    public List<Favorito> getAllFavoritos() {
        return favoritoRepository.findAll();
    }

    @GetMapping("/favoritos/{id}")
    public List<Favorito> getFavoritos(@PathVariable(value = "id") Long dataId) {
        return favoritoRepository.findByUsuario(dataId);
    }

    @GetMapping("/favorito/{id}")
    public ResponseEntity<Favorito> getFavoritoById(@PathVariable(value = "id") Long dataId) {
        Favorito data = favoritoRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(data);
    }

    @PostMapping("/favorito")
    public Favorito createFavorito(@Valid @RequestBody Favorito data) {
        return favoritoRepository.save(data);
    }

    @PutMapping("/favorito/{id}")
    public ResponseEntity<Favorito> updateFavorito(@PathVariable(value = "id") Long dataId,
                                           @Valid @RequestBody Favorito dataDetails) {
        Favorito data = favoritoRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }
        data.setUsuario(dataDetails.getUsuario());
        data.setFavorito(dataDetails.getFavorito());

        Favorito updatedFavorito = favoritoRepository.save(data);
        return ResponseEntity.ok(updatedFavorito);
    }

    @DeleteMapping("/favorito/{id}")
    public ResponseEntity<Favorito> deleteFavorito(@PathVariable(value = "id") Long dataId) {
        Favorito data = favoritoRepository.findOne(dataId);
        if(data == null) {
            return ResponseEntity.notFound().build();
        }

        favoritoRepository.delete(data);
        return ResponseEntity.ok().build();
    }
}
