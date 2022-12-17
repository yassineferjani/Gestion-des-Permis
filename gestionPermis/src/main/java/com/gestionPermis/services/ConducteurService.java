package com.gestionPermis.services;

import java.util.List;

import com.gestionPermis.models.Conducteur;

public interface ConducteurService {
	
	List<Conducteur> listConducteurs();
	Conducteur getConducteur(Long id);
	void addConducteur(Conducteur conducteur);
	void updateConducteur (Conducteur conducteur);
	void deleteConducteur (Long id);

}
