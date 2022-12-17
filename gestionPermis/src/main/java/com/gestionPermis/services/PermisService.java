package com.gestionPermis.services;

import java.util.List;

import com.gestionPermis.models.Permis;



public interface PermisService {
			
	List<Permis> listPermis();
	Permis getPermis(Long id);
	void addPermis(Permis permis);
	void updatePermis(Permis permis);
	void deletePermis (Long id);

}

